import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilterName = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, filter) => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
