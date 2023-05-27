import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const getProducts = async () => {
  const res = await axios.get(`${baseUrl}/product/`);
  return res.data;
};

const productService = {
  getProducts,
};

export default productService;
