import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apGetAllContact = createAsyncThunk(
  "contacts/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        "https://66cf72cc901aab248422339b.mockapi.io/Contacts/"
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiDelContact = createAsyncThunk(
  "contacts/delete",

  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `https://66cf72cc901aab248422339b.mockapi.io/Contacts/${id}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
