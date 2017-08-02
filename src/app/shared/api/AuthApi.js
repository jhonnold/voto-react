import axios from 'axios';

export const AuthApi = {
  loginUser: (params) => {
    return axios.post('/login', params);
  },
  createUser: (params) => {
    return axios.post('/database/createUser', params);
  }
}
