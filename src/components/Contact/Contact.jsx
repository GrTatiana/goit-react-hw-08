import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelContact = (contactId) => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  return (
    <div className={css.liItem}>
      <div className={css.paragraphs}>
        <p className={css.nameNumber}>
          <FaUser />
          {name}
        </p>
        <p className={css.nameNumber}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button
        type="button"
        className={css.delBtn}
        onClick={() => onDelContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
