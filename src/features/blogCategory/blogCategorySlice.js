import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogCategoryService from "./blogCategoryService";

const initialState = {
  blogCategories: [],
  createdBlogCategory: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getBlogCategories = createAsyncThunk(
  "blogCategory",
  async (blogCategory, thunkApi) => {
    try {
      return await blogCategoryService.getBlogCategories();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const createBlogCategory = createAsyncThunk(
  "createBlogCategory",
  async (blogCategoryData, thunkAPI) => {
    try {
      return await blogCategoryService.addBlogCategory(blogCategoryData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const blogCategorySlice = createSlice({
  name: "blogCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogCategories = action.payload;
      })
      .addCase(getBlogCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.blogCategories = null;
      })
      .addCase(createBlogCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBlogCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdBlogCategory = action.payload;
      })
      .addCase(createBlogCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.createdBlogCategory = null;
      });
  },
});

export default blogCategorySlice.reducer;
