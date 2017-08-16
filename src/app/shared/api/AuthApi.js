import axios from "axios";

const AuthApi = {
  loginUser: params => axios.post("/api/login", params),
  createUser: params => axios.post("/api/users/createUser", params),
  logoutUser: () => axios.post("/api/login/logout"),
};

export default AuthApi;
