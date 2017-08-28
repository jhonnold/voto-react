import axios from "axios";

const DataApi = {
  fetchSessions: () => axios.get("/api/sessions"),
  createSession: params => axios.post("/api/sessions/saveNewSession", params),
  updateSession: (params) => {
    // Were ditching the questions - those go later
    const { questions, ...rest } = params;

    return axios.post("/api/sessions/updateSession", rest);
  },
  activeSessions: () => axios.get("/api/sessions/active"),
  activateSession: ({ sessionId, isActive })=>
    axios.post(`/api/sessions/activateSession/${sessionId}`, { isActive }),
  activateQuestion: id => 
    axios.post(`/api/sesssions/activateQuestion/${id}`),
  deactivateQuestion: id =>
    axios.post(`/api/sessions/deactivateQuestios/${id}`),
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
};

export default DataApi;
