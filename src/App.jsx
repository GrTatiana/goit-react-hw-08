import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid/non-secure";
// import { Section } from "./components/Section/Section";
import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";
import contactFromData from "./dataContact.json";
function App() {
  const [contact, setContact] = useState(contactFromData);
  console.log(contact);

  const handleSubmit = (event) => {
    event.preventdefault();
    console.log(event);
    event.curentTarget.resetForm();
  };

  const nameFieldId = nanoid();
  const telFieldId = nanoid();

  const initialValues = {
    name: "",
    tel: "",
  };

  const AddContact = (contact) => {
    console.log(contact);
    setContact;
  };
  return (
    <div>
      {/* <Section> */}
      <h1 style={{ color: "black" }}>Phonebook</h1>
      <ContactForm
        submit={handleSubmit}
        nameFieldId={nameFieldId}
        telFieldId={telFieldId}
        initialValues={initialValues}
        addContact={AddContact}
      />
      <SearchBox />
      {/* <ContactList /> */}
      {/* </Section> */}
    </div>
  );
}

export default App;
