import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customerService from "./customerService";

const initialState = {
  customers: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getUsers = createAsyncThunk("user", async (user, thunkApi) => {
  try {
    return await customerService.getUsers();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const customerSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.customers = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.customers = null;
      });
  },
});

export default customerSlice.reducer;
