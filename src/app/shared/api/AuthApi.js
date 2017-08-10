import axios from "axios";

const AuthApi = {
  loginUser: params => axios.post("/api/login", params),
  createUser: params => axios.post("/api/database/createUser", params),
};

export default AuthApi;
