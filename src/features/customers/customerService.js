import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const getUsers = async () => {
  const res = await axios.get(`${baseUrl}/user/`);
  return res.data;
};

const customerService = {
  getUsers,
};

export default customerService;
