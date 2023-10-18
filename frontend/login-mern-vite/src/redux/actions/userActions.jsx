import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Login api calling and returning data to redux state
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `http://localhost:4000/api/user/login`,
        JSON.stringify(userCredentials),
        config
      );

      localStorage.setItem("user", JSON.stringify(data));

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

// Signup api calling and returning data to redux state
export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      // Axios Post
      const { data } = await axios.post(
        `http://localhost:4000/api/user/signup`,
        userCredentials,
        config
      );

      localStorage.setItem("user", JSON.stringify(data));

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
  "user/updateUser",
  async ({ userId, userCredentials }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.patch(
        `http://localhost:4000/api/user/update/${userId}`,
        userCredentials,
        config
      );

      localStorage.setItem("user", JSON.stringify(data));

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
