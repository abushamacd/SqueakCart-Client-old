import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import brandService from "./brandService";

const initialState = {
  brands: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getBrands = createAsyncThunk("brand", async (brand, thunkApi) => {
  try {
    return await brandService.getBrands();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const productSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.brands = null;
      });
  },
});

export default productSlice.reducer;
