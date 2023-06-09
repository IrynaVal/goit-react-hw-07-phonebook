import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.value;

// export const selectFilteredContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectFilter(state).toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter)
//   );
// };

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
