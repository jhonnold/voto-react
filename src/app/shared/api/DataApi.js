import axios from "axios";

const DataApi = {
  fetchSessions: params => axios.get("/api/sessions", { params }),
  createSession: params => axios.post("/api/sessions/saveNewSession", params),
  updateSession: (params) => {
    // Were ditching the questions - those go later
    const { questions, ...rest } = params;

    return axios.post("/api/sessions/updateSession", rest);
  },
  activeSessions: () => axios.get("/api/sessions/active"),
  activateSession: ({ sessionId }) =>
    axios.post(`/api/sessions/activateSession/${sessionId}`),
  deactivateSession: ({ sessionId }) =>
    axios.post(`/api/sessions/de-activateSession/${sessionId}`),
  activateQuestion: id =>
    axios.post(`/api/sessions/activateQuestion/${id}`),
  deactivateQuestion: id =>
    axios.post(`/api/sessions/deactivateQuestion/${id}`),
  fetchQuestions: params =>
    axios.get(`/api/sessions/sessionQuestions/${params.sessionId}`),
  updateQuestions: params =>
    axios.post("/api/sessions/saveSessionQuestions", { questions: params }),
  getQuestionUrl: params =>
    axios.get(`/api/sessions/questionImageUrl/${params.imgFileName}`),
  newImageUpload: params => axios.post("/api/sessions/uploadImageFile", params),
  deleteQuestion: params =>
    axios.delete(
      `/api/sessions/${params.questionId || 0}/image/${params.imgFileName}`,
    ),
  postResponse: ({ params, sessionId, questionId }) =>
    axios.post(`/api/sessions/saveResponse/${sessionId}/${questionId}`, { params }),
};

export default DataApi;
