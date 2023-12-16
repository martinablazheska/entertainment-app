import { useAppSelector } from "../../store/store";

import RecommendedCard from "../UI/RecommendedCard";

import classes from "./Recommended.module.scss";

import contentUnit from "../../store/types";

const Recommended: React.FC<{ recommendedContent: contentUnit[] }> = ({
  recommendedContent,
}) => {
  const value = useAppSelector((store) => store.filter.content.searchValue);
  const displayedContent = useAppSelector(
    (store) => store.filter.content.displayed
  );
  let heading = "Recommended for you";
  if (value !== "" && displayedContent.length !== 0) {
    heading = `Found ${displayedContent.length} results for '${value}'`;
  }
  if (value !== "" && displayedContent.length === 0) {
    heading = `No results found for '${value}'`;
  }

  return (
    <div className={classes.recommended}>
      <h1>{heading}</h1>
      <div className={classes["recommended-content"]}>
        {recommendedContent.map((r) => (
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
};

export default Recommended;
