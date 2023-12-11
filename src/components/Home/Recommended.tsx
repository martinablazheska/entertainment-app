import { recommended } from "../../store/data";

import RecommendedCard from "../UI/RecommendedCard";

import classes from "./Recommended.module.scss";

function Recommended() {
  return (
    <div className={classes.recommended}>
      <h1>Recommended for you</h1>
      <div className={classes["recommended-content"]}>
        {recommended.map((r) => (
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

export default Recommended;
