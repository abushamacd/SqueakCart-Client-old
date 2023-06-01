import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const imageUpload = async (data) => {
  const res = await axios.post(`${baseUrl}/product/upload-img`, data, config);
  return res.data;
};
const imageDelete = async (id) => {
  const res = await axios.delete(`${baseUrl}/product/delete-img/${id}`, config);
  return res.data;
};

const imageService = {
  imageUpload,
  imageDelete,
};

export default imageService;
