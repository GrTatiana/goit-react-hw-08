import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactFromData }) => {
  console.log(contactFromData);
  return (
    <>
      <ul className={css.list}>
        {contactFromData.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} />
        ))}
      </ul>
    </>
  );
};
export default ContactList;
