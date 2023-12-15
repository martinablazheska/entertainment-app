import { useAppDispatch, useAppSelector } from "../../store/store";
import { filterMovies } from "../../store/filter-slice";

import SearchBar from "../UI/SearchBar";
import RecommendedCard from "../UI/RecommendedCard";

import classes from "./Movies.module.scss";

function Movies() {
  const dispatch = useAppDispatch();

  const movies = useAppSelector((state) => state.filter.movies.displayed);
  const value = useAppSelector((state) => state.filter.movies.searchValue);

  function onMovieSearch(input: string) {
    dispatch(filterMovies(input));
  }

  return (
    <div className={classes.movies}>
      <SearchBar
        placeholder="Search for movies"
        value={value}
        onSearch={onMovieSearch}
      />
      <h1>Movies</h1>
      <div className={classes["movies-content"]}>
        {movies.map((r) => (
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

export default Movies;
