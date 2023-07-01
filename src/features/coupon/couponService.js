import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getCoupons = async () => {
  const res = await axios.get(`${baseUrl}/coupon/`);
  return res.data;
};

const addCoupon = async (coupon) => {
  const res = await axios.post(`${baseUrl}/coupon/`, coupon, config);
  return res.data;
};

const couponService = {
  getCoupons,
  addCoupon,
};

export default couponService;
