import SearchBar from "../UI/SearchBar";
import RecommendedCard from "../UI/RecommendedCard";

import { movies } from "../../store/data";

import classes from "./Movies.module.scss";

function Movies() {
  return (
    <div className={classes.movies}>
      <SearchBar placeholder="Search for movies" />
      <h1>Movies</h1>
      <div className={classes["movies-content"]}>
        {movies.map((r) => (
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

export default Movies;
