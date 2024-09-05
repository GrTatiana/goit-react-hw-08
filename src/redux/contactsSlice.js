import { createSlice } from "@reduxjs/toolkit";
import { apiDelContact, apiGetAllContacts } from "./contactsOps";
// import data from "../dataContact.json";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(apiGetAllContacts.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiGetAllContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(apiGetAllContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(apiDelContact.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiDelContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(apiDelContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default contactsSlice;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
export const { addContact, deleteContact } = contactsSlice.actions;
