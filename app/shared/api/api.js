import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8081/api', // 'https://voto.io/api/',
  timeout: 1000,
  withCredentials: true,
});
