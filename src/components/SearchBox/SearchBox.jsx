import css from "./SearchBox.module.css";
const SearchBox = ({ value, onfilter }) => {
  return (
    <div className={css.searchBox}>
      <h2 className={css.titleField}>Find contact by name</h2>
      <input
        className={css.field}
        type="text"
        value={value}
        onChange={onfilter}
      />
    </div>
  );
};
export default SearchBox;
