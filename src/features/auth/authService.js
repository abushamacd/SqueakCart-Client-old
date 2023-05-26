import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const login = async (userData) => {
  const res = await axios.post(`${baseUrl}/user/login`, userData);
  if (res?.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const authService = {
  login,
};

export default authService;
