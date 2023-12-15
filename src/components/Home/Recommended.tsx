import RecommendedCard from "../UI/RecommendedCard";

import classes from "./Recommended.module.scss";

import contentUnit from "../../store/types";

const Recommended: React.FC<{ recommendedContent: contentUnit[] }> = ({
  recommendedContent,
}) => {
  return (
    <div className={classes.recommended}>
      <h1>Recommended for you</h1>
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
