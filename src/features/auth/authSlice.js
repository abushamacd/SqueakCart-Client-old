import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: userFromLocalStorage,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const login = createAsyncThunk("user/login", async (user, thunkApi) => {
  try {
    return await authService.login(user);
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
