import s from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = ({ value, onFilter }) => {
  const filterId = useId();

  return (
    <div className={s.container}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        className={s.filter}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        id={filterId}
      />
    </div>
  );
};

export default SearchBox;
