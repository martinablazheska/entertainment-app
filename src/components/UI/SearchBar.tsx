import searchIcon from "../../assets/icon-search.svg";
import classes from "./SearchBar.module.scss";

const SearchBar: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <div className={classes.search}>
      <img src={searchIcon} alt="Search" />
      <input type="text" placeholder={placeholder} id="filter" />
    </div>
  );
};

export default SearchBar;
