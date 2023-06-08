import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const blogImgUpload = async (data) => {
  const res = await axios.post(`${baseUrl}/blog/upload-img`, data, config);
  return res.data;
};
const blogImgDelete = async (id) => {
  const res = await axios.delete(`${baseUrl}/blog/delete-img/${id}`, config);
  return res.data;
};

const blogImgService = {
  blogImgUpload,
  blogImgDelete,
};

export default blogImgService;
