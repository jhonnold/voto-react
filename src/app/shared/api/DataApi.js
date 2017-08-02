import axios from 'axios';

export const DataApi = {
  fetchSessions: (params) => {
    return axios.get('/sessions');
  },
}
