import SearchBar from "../UI/SearchBar";
import RecommendedCard from "../UI/RecommendedCard";

import { initiallyBookmarked } from "../../store/data";

import classes from "./bookmarked.module.scss";

function Bookmarked() {
  return (
    <div className={classes.bookmarked}>
      <SearchBar placeholder="Search for bookmarked movies and TV series" />
      <h1>Bookmarked</h1>
      <div className={classes["bookmarked-content"]}>
        {initiallyBookmarked.map((r) => (
          <RecommendedCard
            title={r.title}
            thumbnail={r.thumbnail.regular.small}
            year={r.year}
            key={r.title}
            rating={r.rating}
            bookmarked={r.isBookmarked}
            category={r.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Bookmarked;
