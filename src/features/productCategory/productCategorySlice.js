import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productCategoryService from "./productCategoryService";

const initialState = {
  productCategories: [],
  createdProductCategory: [],
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

export const createProductCategory = createAsyncThunk(
  "createProductCategory",
  async (productCategoryData, thunkAPI) => {
    try {
      return await productCategoryService.addProductCategory(
        productCategoryData
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const productCategorySlice = createSlice({
  name: "productCategory",
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
      })
      .addCase(createProductCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProductCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdProductCategory = action.payload;
      })
      .addCase(createProductCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.createdProductCategory = null;
      });
  },
});

export default productCategorySlice.reducer;
