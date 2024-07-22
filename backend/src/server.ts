import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mock user database
const users = [
  {
    id: 1,
    email: 'john@example.com',
    password: 'password123',
  },
];

interface User {
  id: number;
  email: string;
  password: string;
}

app.post('/auth/login', (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user: User | undefined = users.find((u: User) => u.email === email);
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Successful login
    res.json({ message: 'Login successful', userId: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});