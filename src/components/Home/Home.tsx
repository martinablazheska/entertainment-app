import SearchBar from "../UI/SearchBar";
import classes from "./Home.module.scss";

function Home() {
  return (
    <div className={classes.home}>
      <SearchBar placeholder="Search for movies or TV series" />
    </div>
  );
}

export default Home;
