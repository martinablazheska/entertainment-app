import { trending } from "../../store/data";

import TrendingCard from "../UI/TrendingCard";

import classes from "./Trending.module.scss";

function Trending() {
  return (
    <>
      <h1>Trending</h1>
      <div className={classes.trending}>
        <div className={classes["trending-content"]}>
          {trending.map((t) => (
            <TrendingCard
              title={t.title}
              thumbnail={t.thumbnail.trending?.small}
              year={t.year}
              key={t.title}
              rating={t.rating}
              bookmarked={t.isBookmarked}
              category={t.category}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Trending;
