import axios from 'axios';

export const DataApi = {
  fetchSessions: (params) => {
    return axios.get('/sessions');
  },
  createSession: (params) => {
    return axios.post('/sessions/saveNewSession', params);
  },
  fetchQuestions: (params) => {
    console.log(params);
    return axios.get('/sessions/sessionQuestions', { params });
  }
};
