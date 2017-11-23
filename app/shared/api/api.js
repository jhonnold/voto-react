import axios from 'axios';

export default axios.create({
  baseURL: 'https://voto.io/api/',
  timeout: 1000,
  withCredentials: true,
});
