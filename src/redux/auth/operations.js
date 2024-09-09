import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const instance = axios.create({
  baseUrl: "https://connections-api.goit.global/",
});

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/login", userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/signup", userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (userData, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/logout", userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const refreshUser = createAsyncThunk(
//   "auth/refresh",
//   async (id, thunkAPI) => {
//     try {
//       await axios.delete(`${BASE_URL}${id}`);
//       return id;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
