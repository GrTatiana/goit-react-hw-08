import css from "./HomePage.module.css";
import { FcContacts } from "react-icons/fc";
const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h1 style={{ color: "black" }}>
        <FcContacts />
        Welcome to Your Personal Phonebook Easily organize and manage your
        contacts in one place.
      </h1>
      <h2 style={{ color: "black" }}>
        Whether you need to store personal connections or professional networks,
        our phonebook keeps your important contact details safe and accessible.
      </h2>
    </div>
  );
};

export default HomePage;
