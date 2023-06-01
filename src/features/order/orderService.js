import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
const userFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const config = {
  headers: {
    Authorization: `Bearer ${userFromLocalStorage?.data?.token}`,
    Accept: "application/json",
  },
};

const getOrders = async () => {
  const res = await axios.get(`${baseUrl}/user/all-orders`, config);
  return res.data;
};

const orderService = {
  getOrders,
};

export default orderService;
