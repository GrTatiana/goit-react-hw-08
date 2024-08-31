import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilter = (event) => {
    const value = event.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.searchBox}>
      <h2 className={css.titleField}>Find contact by name</h2>
      <input
        className={css.field}
        type="text"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;
