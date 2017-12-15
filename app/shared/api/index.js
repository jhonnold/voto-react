import api from './api';

export default {
  loginUser: params => api.post('login', params),
  signupUser: params => api.post('users/createUser', params),
};
