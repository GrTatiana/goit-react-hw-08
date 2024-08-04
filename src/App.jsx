import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import contactFromData from "./dataContact.json";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid/non-secure";

function App() {
  const [contact, setContact] = useState(() => {
    const stateSave = window.localStorage.getItem("contacts");
    return stateSave ? JSON.parse(stateSave) : contactFromData;
  });
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);

  const onAddContact = (contact) => {
    const neWContact = {
      ...contact,
      id: nanoid(),
    };
    setContact((contact) => {
      return [neWContact, ...contact];
    });
  };

  const onDelContact = (contactId) => {
    setContact(contact.filter((item) => item.id !== contactId));
    console.log(contactId);
  };

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilterValue(value);
  };

  const onFilterContact = contact.filter((cont) =>
    cont.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ color: "black" }}>Phonebook</h1>
      <ContactForm addContact={onAddContact} />
      <SearchBox value={filterValue} onfilter={handleFilter} />
      <ContactList
        contactFromData={onFilterContact}
        delContact={onDelContact}
      />
    </div>
  );
}

export default App;
