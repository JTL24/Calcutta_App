import axios from 'axios';
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

API_URL = 'http://localhost:3000';

export const login = async (email: string, password: string) => {
  try {
    console.log('Sending request to:', `${API_URL}/auth/login`);
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    console.log('Response received:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in login request:', error);
    if ((error as any).response) {
      console.error('Error response:', (error as any).response.data);
      throw (error as any).response.data;
    } else if ((error as any).request) {
      console.error('No response received');
      throw new Error('No response from server');
    } else {
      console.error('Error setting up request:', (error as any).message);
      throw new Error('Error setting up request');
    }
  }
};