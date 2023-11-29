import SearchBar from "../UI/SearchBar";
import Trending from "./Trending";

import classes from "./Home.module.scss";

function Home() {
  return (
    <div className={classes.home}>
      <SearchBar placeholder="Search for movies or TV series" />
      <Trending />
    </div>
  );
}

export default Home;
