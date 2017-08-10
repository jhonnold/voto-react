import axios from 'axios';

export const AuthApi = {
  loginUser: params => axios.post('/api/login', params),
  createUser: params => axios.post('/api/database/createUser', params),
};
