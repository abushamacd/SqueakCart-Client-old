import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import couponService from "./couponService";

const initialState = {
  coupons: [],
  createdCoupon: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getCoupons = createAsyncThunk(
  "coupon",
  async (coupon, thunkApi) => {
    try {
      return await couponService.getCoupons();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const createCoupon = createAsyncThunk(
  "createCoupon",
  async (couponData, thunkAPI) => {
    try {
      return await couponService.addCoupon(couponData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const couponSlice = createSlice({
  name: "coupons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoupons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoupons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.coupons = action.payload;
      })
      .addCase(getCoupons.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.coupons = null;
      })
      .addCase(createCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdCoupon = action.payload;
      })
      .addCase(createCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.createdCoupon = null;
      });
  },
});

export default couponSlice.reducer;
