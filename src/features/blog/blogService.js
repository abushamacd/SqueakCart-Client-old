import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const getBlogs = async () => {
  const res = await axios.get(`${baseUrl}/blog/`);
  return res.data;
};

const blogService = {
  getBlogs,
};

export default blogService;
