import { useAppDispatch, useAppSelector } from "../../store/store";
import { filterBookmarks } from "../../store/bookmarked-slice";

import SearchBar from "../UI/SearchBar";
import RecommendedCard from "../UI/RecommendedCard";

import classes from "./Bookmarked.module.scss";

function Bookmarked() {
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector(
    (state) => state.bookmarks.displayedBookmarks
  );
  const value = useAppSelector((state) => state.bookmarks.searchValue);

  function onBookmarkSearch(input: string) {
    dispatch(filterBookmarks(input));
  }

  let heading = "Bookmarked";
  if (value !== "" && bookmarks.length !== 0) {
    heading = `Found ${bookmarks.length} results for '${value}'`;
  }
  if (value !== "" && bookmarks.length === 0) {
    heading = `No results found for '${value}'`;
  }
  if (value === "" && bookmarks.length === 0) {
    heading = "No bookmarks found";
  }

  return (
    <div className={classes.bookmarked}>
      <SearchBar
        placeholder="Search for bookmarked movies and TV series"
        onSearch={onBookmarkSearch}
        value={value}
      />
      <h1>{heading}</h1>
      <div className={classes["bookmarked-content"]}>
        {bookmarks.map((r) => (
          <RecommendedCard
            title={r.title}
            thumbnail={r.thumbnail.regular.small}
            year={r.year}
            key={r.title}
            rating={r.rating}
            category={r.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Bookmarked;
