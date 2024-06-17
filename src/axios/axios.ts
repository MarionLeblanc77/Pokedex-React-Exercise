import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://tyradex.tech/api/v1/',
});

export default axiosInstance;
