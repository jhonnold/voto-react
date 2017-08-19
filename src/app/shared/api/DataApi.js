import axios from "axios";

const DataApi = {
  fetchSessions: () => axios.get("/api/sessions"),
  createSession: params => axios.post("/api/sessions/saveNewSession", params),
  updateSession: (params) => {
    const { questions, ...rest } = params;

    return axios.post("/api/sessions/updateSession", rest);
  },
  activeSessions: () => axios.get("/api/sessions/active"),
  activateSession: params =>
    axios.post("/api/sessions/activateSession", params),
  fetchQuestions: params =>
    axios.get(`/api/sessions/sessionQuestions/${params.sessionId}`),
  updateQuestions: params =>
    axios.post("/api/sessions/saveSessionQuestions", { questions: params }),
  getQuestionUrl: params =>
    axios.get("/api/sessions/questionImageUrl", { params }),
  newImageUpload: params => axios.post("/api/sessions/uploadImageFile", params),
  deleteQuestion: params =>
    axios.delete(
      `/api/sessions/${params.questionId || 0}/image/${params.imgFileName}`,
    ),
};

export default DataApi;
