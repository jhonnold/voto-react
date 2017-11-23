import api from './api';

export default {
  loginUser: params => api.post('login', params),
};
