import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import productCategoryReducer from "../features/productCategory/productCategorySlice";
import colorReducer from "../features/color/colorSlice";
import blogReducer from "../features/blog/blogSlice";
import blogCategoryReducer from "../features/blogCategory/blogCategorySlice";
import couponReducer from "../features/coupon/couponSlice";
import orderReducer from "../features/order/orderSlice";
import contactReducer from "../features/enquire/enquireSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    product: productReducer,
    brand: brandReducer,
    productCategory: productCategoryReducer,
    color: colorReducer,
    blog: blogReducer,
    blogCategory: blogCategoryReducer,
    coupon: couponReducer,
    order: orderReducer,
    contact: contactReducer,
  },
});
