import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const getCoupons = async () => {
  const res = await axios.get(`${baseUrl}/coupon/`);
  return res.data;
};

const couponService = {
  getCoupons,
};

export default couponService;
