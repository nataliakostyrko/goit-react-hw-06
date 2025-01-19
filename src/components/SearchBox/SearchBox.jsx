import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";


const SearchBox = () => {
 const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={css.form}>
      <p className={css.textSeach}>Find contact by name:</p>
      <input type="text" value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}  />
    </div>
  );
};

export default SearchBox;