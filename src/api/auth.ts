import axios from 'axios';
import { Platform } from 'react-native';
let API_URL: string;

// if (__DEV__) {
//     if (Platform.OS === 'android') {
//       API_URL = 'http://10.0.2.2:3000';
//     } else if (Platform.OS === 'ios') {
//       API_URL = 'http://localhost:3000';
//     } else if (Platform.OS === 'web') {
//         API_URL = 'http://localhost:3000';
//     } else {
//         console.log('Platform not recognized');
//       // For physical devices during development
//       API_URL = 'http://100.70.83.130:3000'; // Ipad uRL
//     }
//   } else {
//     // Production URL
//     API_URL = 'https://your-production-api.com';
//   }

API_URL = 'https://7d51-216-171-37-73.ngrok-free.app';
export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};