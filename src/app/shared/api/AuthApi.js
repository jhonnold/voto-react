import axios from 'axios';

export const AuthApi = {
  loginUser: (params) => {
    return axios.post('/login', params);
  }
}
