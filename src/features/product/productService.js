import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getProducts = async () => {
  const res = await axios.get(`${baseUrl}/product/`);
  return res.data;
};

const createProduct = async (product) => {
  const res = await axios.post(`${baseUrl}/product/`, product, config);
  return res.data;
};

const productService = {
  getProducts,
  createProduct,
};

export default productService;
