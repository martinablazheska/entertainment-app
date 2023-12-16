import { useAppDispatch, useAppSelector } from "../../store/store";
import { filterSeries } from "../../store/filter-slice";

import SearchBar from "../UI/SearchBar";
import RecommendedCard from "../UI/RecommendedCard";

import classes from "./TVSeries.module.scss";

function TVSeries() {
  const dispatch = useAppDispatch();

  const series = useAppSelector((state) => state.filter.series.displayed);
  const value = useAppSelector((state) => state.filter.series.searchValue);

  function onSeriesSearch(input: string) {
    dispatch(filterSeries(input));
  }

  let heading = "Series";
  if (value !== "" && series.length !== 0) {
    heading = `Found ${series.length} results for '${value}'`;
  }
  if (value !== "" && series.length === 0) {
    heading = `No results found for '${value}'`;
  }

  return (
    <div className={classes.series}>
      <SearchBar
        placeholder="Search for series"
        value={value}
        onSearch={onSeriesSearch}
      />
      <h1>{heading}</h1>
      <div className={classes["series-content"]}>
        {series.map((r) => (
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

export default TVSeries;
