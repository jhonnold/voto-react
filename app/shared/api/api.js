import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080/api', // 'https://voto.io/api/',
  timeout: 1000,
  withCredentials: true,
});
