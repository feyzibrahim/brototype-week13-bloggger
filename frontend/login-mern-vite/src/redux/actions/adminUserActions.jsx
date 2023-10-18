import { createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";

export const adminGetAllUser = createAsyncThunk(
  "adminUser/adminGetAllUser",
  async (userCredentials, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().user.user;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(
        `http://localhost:4000/api/admin/users`,
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.error) {
        console.log(error.response.data.error);

        return rejectWithValue(error.response.data.error);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const createNewUser = createAsyncThunk(
  "adminUser/createNewUser",
  async (userCredentials, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().user.user;
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `http://localhost:4000/api/admin/newUser`,
        userCredentials,
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.error) {
        console.log(error.response.data.error);

        return rejectWithValue(error.response.data.error);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteUser = createAsyncThunk(
  "adminUser/deleteUser",
  async ({ userId }, { rejectWithValue, getState }) => {
    // console.log(userCredentials);

    try {
      const { token } = getState().user.user;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.delete(
        `http://localhost:4000/api/admin/user/${userId}`,
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.error) {
        console.log(error.response.data.error);

        return rejectWithValue(error.response.data.error);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateUser = createAsyncThunk(
  "adminUser/updateUser",
  async ({ userId, userCredentials }, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().user.user;
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      console.log(userId);
      console.log(userCredentials);
      const { data } = await axios.patch(
        `http://localhost:4000/api/admin/user/${userId}`,
        userCredentials,
        config
      );

      return data;
    } catch (error) {
      if (error.response && error.response.data.error) {
        console.log(error.response.data.error);

        return rejectWithValue(error.response.data.error);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const selectFilteredUsers = createSelector(
  (state) => state.adminUser.adminUser,
  (state) => state.adminUser.searchQuery,
  (adminUser, searchQuery) => {
    if (searchQuery.trim() === "") {
      return adminUser;
    } else {
      return adminUser.filter((user) =>
        user.userName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  }
);
