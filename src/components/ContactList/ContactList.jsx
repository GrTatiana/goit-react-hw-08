import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const onFilterContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ul className={css.list}>
        {onFilterContact.map(({ id, name, number }) => (
          <li key={id}>
            <Contact name={name} id={id} number={number} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
