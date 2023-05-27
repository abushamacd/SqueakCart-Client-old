import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const getOrders = async () => {
  const res = await axios.get(`${baseUrl}/user/all-orders`);
  return res.data;
};

const orderService = {
  getOrders,
};

export default orderService;
