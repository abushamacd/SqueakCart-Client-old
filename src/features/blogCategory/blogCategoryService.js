import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const getBlogCategories = async () => {
  const res = await axios.get(`${baseUrl}/blog-category/`);
  return res.data;
};

const blogCategoryService = {
  getBlogCategories,
};

export default blogCategoryService;
