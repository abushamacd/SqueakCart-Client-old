import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contactService from "./enquireService";

const initialState = {
  contacts: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getContacts = createAsyncThunk(
  "contact",
  async (contact, thunkApi) => {
    try {
      return await contactService.getContacts();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.contacts = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.contacts = null;
      });
  },
});

export default contactSlice.reducer;
