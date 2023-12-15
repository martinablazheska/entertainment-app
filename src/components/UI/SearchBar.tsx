import searchIcon from "../../assets/icon-search.svg";
import classes from "./SearchBar.module.scss";

const SearchBar: React.FC<{
  placeholder: string;
  onSearch: (input: string) => void;
  value: string;
}> = ({ placeholder, onSearch, value }) => {
  function onChange(event: any) {
    onSearch(event.target.value);
  }
  return (
    <div className={classes.search}>
      <img src={searchIcon} alt="Search" />
      <input
        type="text"
        placeholder={placeholder}
        id="filter"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
