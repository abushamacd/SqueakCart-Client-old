import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogService from "./blogService";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getBlogs = createAsyncThunk("blog", async (blog, thunkApi) => {
  try {
    return await blogService.getBlogs();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const productSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.blogs = null;
      });
  },
});

export default productSlice.reducer;
