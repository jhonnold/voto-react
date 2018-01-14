import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:8081/api',
  baseURL: 'https://voto.io/api/',
  timeout: 1000,
  withCredentials: true,
});
