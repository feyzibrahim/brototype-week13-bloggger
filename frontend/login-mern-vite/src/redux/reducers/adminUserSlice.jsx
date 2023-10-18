import { createSlice } from "@reduxjs/toolkit";
import {
  adminGetAllUser,
  deleteUser,
  updateUser,
  createNewUser,
} from "../actions/adminUserActions";
import toast from "react-hot-toast";

const adminUserSlice = createSlice({
  name: "adminUser",
  initialState: {
    adminUser: [],
    loading: false,
    error: null,
    searchQuery: "",
  },
  reducers: {
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminGetAllUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(adminGetAllUser.fulfilled, (state, { payload }) => {
        state.adminUser = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(adminGetAllUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.adminUser = null;
        state.error = payload;
      })
      // Deleting Users
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.adminUser = state.adminUser.filter(
          (us) => us._id !== payload._id
        );
        state.error = null;
        toast.success("Successfully Deleted the User");
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // Updating user details
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        const index = state.adminUser.findIndex(
          (user) => user._id === payload._id
        );

        if (index !== -1) {
          state.adminUser[index] = payload;
        }
        toast.success("User Updated");
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // Creating new users
      .addCase(createNewUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNewUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.adminUser = [...state.adminUser, payload];
        toast.success("New User Created");
      })
      .addCase(createNewUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setSearchQuery } = adminUserSlice.actions;

export default adminUserSlice.reducer;
