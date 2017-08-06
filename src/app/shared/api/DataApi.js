import axios from 'axios';

export const DataApi = {
  fetchSessions: (params) => {
    return axios.get('/api/sessions');
  },
  createSession: (params) => {
    return axios.post('/api/sessions/saveNewSession', params);
  },
  updateSession: (params) => {

    const {questions, ...rest} = params;

    return axios.post('/api/sessions/updateSession', rest);
  },
  fetchQuestions: (params) => {
    return axios.get('/api/sessions/sessionQuestions', { params });
  },
  updateQuestions: (params) => {
    console.log(params);
    return axios.post('/api/sessions/saveSessionQuestions', {questions: params} );
  }
};
