import SearchBar from "../UI/SearchBar";
import RecommendedCard from "../UI/RecommendedCard";

import { series } from "../../store/data";

import classes from "./TVSeries.module.scss";

function TVSeries() {
  return (
    <div className={classes.series}>
      <SearchBar placeholder="Search for series" />
      <h1>Series</h1>
      <div className={classes["series-content"]}>
        {series.map((r) => (
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

export default TVSeries;
