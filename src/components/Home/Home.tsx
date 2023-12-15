import { useAppDispatch, useAppSelector } from "../../store/store";
import { filterContent } from "../../store/filter-slice";

import SearchBar from "../UI/SearchBar";
import Trending from "./Trending";
import Recommended from "./Recommended";

import classes from "./Home.module.scss";

function Home() {
  const dispatch = useAppDispatch();

  const recommendedContent = useAppSelector(
    (state) => state.filter.content.displayed
  );
  const value = useAppSelector((state) => state.filter.content.searchValue);

  function onRecommendedSearch(input: string) {
    dispatch(filterContent(input));
  }
  return (
    <div className={classes.home}>
      <SearchBar
        placeholder="Search for movies or TV series"
        value={value}
        onSearch={onRecommendedSearch}
      />
      {value === "" && <Trending />}
      <Recommended recommendedContent={recommendedContent} />
    </div>
  );
}

export default Home;
