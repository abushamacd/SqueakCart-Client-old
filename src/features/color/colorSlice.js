import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import colorService from "./colorService";

const initialState = {
  colors: [],
  createdColor: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getColors = createAsyncThunk("color", async (color, thunkApi) => {
  try {
    return await colorService.getColors();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const createColor = createAsyncThunk(
  "createColor",
  async (colorData, thunkAPI) => {
    try {
      return await colorService.addColor(colorData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getColors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getColors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.colors = action.payload;
      })
      .addCase(getColors.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.colors = null;
      })
      .addCase(createColor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createColor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdColor = action.payload;
      })
      .addCase(createColor.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.createdColor = null;
      });
  },
});

export default productSlice.reducer;
