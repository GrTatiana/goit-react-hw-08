import css from "./SearchBox.module.css";
const SearchBox = () => {
  return (
    <div className={css.searchBox}>
      <label className={css.titleField}>Find contact by name</label>
      <input className={css.field} type="text" name="name" required />
    </div>
  );
};
export default SearchBox;
