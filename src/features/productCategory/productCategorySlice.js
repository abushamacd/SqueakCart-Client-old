import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productCategoryService from "./productCategoryService";

const initialState = {
  productCategories: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getProductCategories = createAsyncThunk(
  "productCategory",
  async (productCategory, thunkApi) => {
    try {
      return await productCategoryService.getProductCategories();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const productCategorySlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.productCategories = action.payload;
      })
      .addCase(getProductCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.productCategories = null;
      });
  },
});

export default productCategorySlice.reducer;
