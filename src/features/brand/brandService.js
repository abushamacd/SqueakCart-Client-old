import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getBrands = async () => {
  const res = await axios.get(`${baseUrl}/brand/`);
  return res.data;
};
const addBrand = async (brand) => {
  const res = await axios.post(`${baseUrl}/brand/`, brand, config);
  return res.data;
};

const brandService = {
  getBrands,
  addBrand,
};

export default brandService;
