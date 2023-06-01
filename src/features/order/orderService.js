import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getOrders = async () => {
  const res = await axios.get(`${baseUrl}/user/all-orders`, config);
  return res.data;
};

const orderService = {
  getOrders,
};

export default orderService;
