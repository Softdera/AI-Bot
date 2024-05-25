import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || 'http://localhost:3000', // Default to localhost for development
});

export default axiosInstance;