import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactFromData, delContact }) => {
  return (
    <>
      <ul className={css.list}>
        {contactFromData.map(({ id, name, number }) => (
          <li key={id}>
            <Contact
              name={name}
              id={id}
              number={number}
              delContact={delContact}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
