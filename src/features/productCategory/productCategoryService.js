import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getProductCategories = async () => {
  const res = await axios.get(`${baseUrl}/product-category/`);
  return res.data;
};

const addProductCategory = async (productCategory) => {
  const res = await axios.post(
    `${baseUrl}/product-category/`,
    productCategory,
    config
  );
  return res.data;
};

const productCategoryService = {
  getProductCategories,
  addProductCategory,
};

export default productCategoryService;
