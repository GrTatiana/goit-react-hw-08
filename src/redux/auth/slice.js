import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";
import { selectContacts, selectNameFilter } from "./contactsSelectors";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  // extraReducers: (builder) =>
  //   builder
  //     .addCase(fetchContacts.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchContacts.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.items = action.payload;
  //     })
  //     .addCase(fetchContacts.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload;
  //     })
  //     .addCase(deleteContact.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(deleteContact.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.items = state.items.filter(
  //         (contact) => contact.id !== action.payload
  //       );
  //     })
  //     .addCase(deleteContact.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload;
  //     })
  //     .addCase(addContact.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(addContact.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.items.push(action.payload);
  //     })
  //     .addCase(addContact.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload;
  //     }),
});

export const authReducer = authSlice.reducer;
