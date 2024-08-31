import { createSlice } from "@reduxjs/toolkit";
import data from "../dataContact.json";

const INITIAL_STATE = {
  items: data,
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
});

export default contactsSlice;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
export const { addContact, deleteContact } = contactsSlice.actions;
