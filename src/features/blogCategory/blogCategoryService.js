import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getBlogCategories = async () => {
  const res = await axios.get(`${baseUrl}/blog-category/`);
  return res.data;
};
const addBlogCategory = async (blogCategory) => {
  const res = await axios.post(
    `${baseUrl}/blog-category/`,
    blogCategory,
    config
  );
  return res.data;
};

const blogCategoryService = {
  getBlogCategories,
  addBlogCategory,
};

export default blogCategoryService;
