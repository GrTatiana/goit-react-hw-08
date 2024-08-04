import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ id, name, number, delContact }) => {
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
        onClick={() => delContact(id)}
      >
        Delete
      </button>
    </div>
  );
};
export default Contact;
