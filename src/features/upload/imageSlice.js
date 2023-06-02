import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import imageService from "./imageService";

const initialState = {
  images: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const imageUpload = createAsyncThunk(
  "imageUpload",
  async (data, thunkApi) => {
    try {
      const formData = new FormData();
      data.forEach((image) => {
        formData.append("images", image);
      });
      return await imageService.imageUpload(formData);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const imageDelete = createAsyncThunk(
  "imageDelete",
  async (id, thunkApi) => {
    try {
      return await imageService.imageDelete(id);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(imageUpload.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(imageUpload.fulfilled, (state, action) => {
        state.images = [...state.images, action.payload.data];
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(imageUpload.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.images = null;
      })
      .addCase(imageDelete.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(imageDelete.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = [];
      })
      .addCase(imageDelete.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default imageSlice.reducer;
