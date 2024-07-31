import css from "./Contact/Contact.module.css";
const Contact = () => {
  return <div>
    <div className={css.liItem}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
  </div>;
};
export default Contact;
