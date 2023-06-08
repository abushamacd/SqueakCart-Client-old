import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import proImgService from "./proImgService";

const initialState = {
  proImages: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const proImgUpload = createAsyncThunk(
  "proImgUpload",
  async (data, thunkApi) => {
    try {
      const formData = new FormData();
      data.forEach((image) => {
        formData.append("images", image);
      });
      return await proImgService.proImgUpload(formData);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const proImgDelete = createAsyncThunk(
  "proImgDelete",
  async (id, thunkApi) => {
    try {
      return await proImgService.proImgDelete(id);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const proImgReset = createAction("Reset_all");

export const imageSlice = createSlice({
  name: "proImages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(proImgUpload.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(proImgUpload.fulfilled, (state, action) => {
        state.proImages = [...state.proImages, action.payload.data];
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(proImgUpload.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.proImages = null;
      })
      .addCase(proImgDelete.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(proImgDelete.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.proImages = [];
      })
      .addCase(proImgDelete.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(proImgReset, () => initialState);
  },
});

export default imageSlice.reducer;
