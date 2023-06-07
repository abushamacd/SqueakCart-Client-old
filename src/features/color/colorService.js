import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getColors = async () => {
  const res = await axios.get(`${baseUrl}/color/`);
  return res.data;
};

const addColor = async (color) => {
  const res = await axios.post(`${baseUrl}/color/`, color, config);
  return res.data;
};

const colorService = {
  getColors,
  addColor,
};

export default colorService;
