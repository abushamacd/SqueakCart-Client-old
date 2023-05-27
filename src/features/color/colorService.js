import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const getColors = async () => {
  const res = await axios.get(`${baseUrl}/color/`);
  return res.data;
};

const colorService = {
  getColors,
};

export default colorService;
