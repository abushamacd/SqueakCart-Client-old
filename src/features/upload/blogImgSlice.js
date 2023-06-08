import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogImgService from "./blogImgService";

const initialState = {
  blogImages: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const blogImgUpload = createAsyncThunk(
  "blogImgUpload",
  async (data, thunkApi) => {
    try {
      const formData = new FormData();
      data.forEach((image) => {
        formData.append("images", image);
      });
      return await blogImgService.blogImgUpload(formData);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const blogImgDelete = createAsyncThunk(
  "blogImgDelete",
  async (id, thunkApi) => {
    try {
      return await blogImgService.blogImgDelete(id);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const blogImgReset = createAction("Reset_all");

export const imageSlice = createSlice({
  name: "blogImages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(blogImgUpload.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(blogImgUpload.fulfilled, (state, action) => {
        state.blogImages = [...state.blogImages, action.payload.data];
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(blogImgUpload.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.blogImages = null;
      })
      .addCase(blogImgDelete.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(blogImgDelete.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogImages = [];
      })
      .addCase(blogImgDelete.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(blogImgReset, () => initialState);
  },
});

export default imageSlice.reducer;
