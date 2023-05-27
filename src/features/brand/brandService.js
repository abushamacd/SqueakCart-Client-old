import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const getBrands = async () => {
  const res = await axios.get(`${baseUrl}/brand/`);
  return res.data;
};

const brandService = {
  getBrands,
};

export default brandService;
