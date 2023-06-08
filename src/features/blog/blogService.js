import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getBlogs = async () => {
  const res = await axios.get(`${baseUrl}/blog/`);
  return res.data;
};

const createBlog = async (blog) => {
  const res = await axios.post(`${baseUrl}/blog/`, blog, config);
  return res.data;
};

const blogService = {
  getBlogs,
  createBlog,
};

export default blogService;
