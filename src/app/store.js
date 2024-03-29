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
import proImgReducer from "../features/upload/proImgSlice";
import blogImgReducer from "../features/upload/blogImgSlice";

export const store = configureStore({
  // devTools: false,
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
    proImg: proImgReducer,
    blogImg: blogImgReducer,
  },
});
