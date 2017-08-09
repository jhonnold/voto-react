import axios from 'axios';

export const AuthApi = {
  loginUser: (params) => {
    return axios.post('/api/login', params);
  },
  createUser: (params) => {
    return axios.post('/api/database/createUser', params);
  },
};
