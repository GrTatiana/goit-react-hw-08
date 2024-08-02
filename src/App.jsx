import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import contactFromData from "./dataContact.json";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid/non-secure";

function App() {
  const [contact, setContact] = useState(contactFromData);
  const [filterValue, setFilterValue] = useState("");
  console.log(contact);

  const handleSubmit = (event) => {
    event.preventdefault();
    event.curentTarget.resetForm();
  };

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilterValue(value);
  };
  const onAddContact = (contact) => {
    const newContact = {
      ...contact,
      id: nanoid(),
    };
    setContact([newContact, ...contact]);
  };
  const nameFieldId = nanoid();
  const telFieldId = nanoid();
  const initialValues = {
    contactName: "",
    contactNumber: "",
  };
  return (
    <div>
      <h1 style={{ color: "black" }}>Phonebook</h1>
      <ContactForm
        submit={handleSubmit}
        nameFieldId={nameFieldId}
        telFieldId={telFieldId}
        initialValues={initialValues}
        addContact={onAddContact}
      />
      <SearchBox />
      <ContactList contactFromData={contactFromData} />
    </div>
  );
}

export default App;
