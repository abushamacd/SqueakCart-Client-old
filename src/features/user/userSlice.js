import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getUsers = createAsyncThunk("user", async (user, thunkApi) => {
  try {
    return await userService.getUsers();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const userSlice = createSlice({
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
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.users = null;
      });
  },
});

export default userSlice.reducer;
