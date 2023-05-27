import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const getProductCategories = async () => {
  const res = await axios.get(`${baseUrl}/product-category/`);
  return res.data;
};

const productCategoryService = {
  getProductCategories,
};

export default productCategoryService;
