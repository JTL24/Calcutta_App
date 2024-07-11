// src/server.ts
import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcrypt';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Database connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
});

app.use(cors({
    origin: '*',  // Be more restrictive in production
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  
  
app.use(express.json());

// Test database connection
app.get('/', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();
    res.json({ message: 'Database connected successfully', time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: 'Database connection error' });
  }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
      client.release();
      
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          res.json({ id: user.id, email: user.email });
        } else {
          res.status(400).json({ error: 'Invalid credentials' });
        }
      } else {
        res.status(400).json({ error: 'User not found' });
      }
    } catch (err) {
      console.error('Login error:', err);  // Add this line
      res.status(500).json({ error: 'Error during login', details: err });
    }
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id',
      [email, hashedPassword]
    );
    client.release();
    res.status(201).json({ id: result.rows[0].id, email });
  } catch (err) {
    res.status(500).json({ error: 'Error registering new user' });
  }
});