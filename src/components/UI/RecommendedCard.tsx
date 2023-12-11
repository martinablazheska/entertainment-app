import bookmarkedIcon from "../../assets/icon-bookmark-full.svg";
import notBookmarkedIcon from "../../assets/icon-bookmark-empty.svg";
import movieIcon from "../../assets/icon-category-movie.svg";
import tvIcon from "../../assets/icon-category-tv.svg";
import bulletIcon from "../../assets/icon-bullet.svg";
import playIcon from "../../assets/icon-play.svg";

import classes from "./RecommendedCard.module.scss";

const RecommendedCard: React.FC<{
  title: string;
  thumbnail: string | undefined;
  year: number;
  rating: string;
  bookmarked: boolean;
  category: string;
}> = ({ title, thumbnail, year, rating, bookmarked, category }) => {
  return (
    <div className={classes["recommended-card"]}>
      <div
        className={classes.thumbnail}
        style={{ backgroundImage: `url("../.${thumbnail}")` }}
      >
        <div className={classes.bookmark}>
          <span>
            <img
              src={bookmarked ? bookmarkedIcon : notBookmarkedIcon}
              alt="bookmark"
            />
          </span>
        </div>
        <div className={classes.play}>
          <img src={playIcon} alt="play" />
          <span>Play</span>
        </div>
      </div>
      <div className={classes.info}>
        <div>
          <span className={classes.year}>{year}</span>
          <img src={bulletIcon} alt="point" />
          <span className={classes.category}>
            <img src={category === "Movie" ? movieIcon : tvIcon} />
            {category}
          </span>
          <img src={bulletIcon} alt="point" />
          <span className={classes.rating}>{rating}</span>
        </div>
        <div className={classes.title}>{title}</div>
      </div>
    </div>
  );
};

export default RecommendedCard;
