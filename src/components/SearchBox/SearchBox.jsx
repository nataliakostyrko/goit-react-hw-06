import css from "./SearchBox.module.css";


const SearchBox = ({ onFilter, filter }) => {
  return (
    <div className={css.form}>
      <p className={css.textSeach}>Find contact by name:</p>
      <input type="text" value={filter} onChange={(e) => onFilter(e.target.value)} />
    </div>
  );
};

export default SearchBox;