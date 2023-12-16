import { useAppDispatch, useAppSelector } from "../../store/store";
import { toggleBookmark } from "../../store/bookmarked-slice";

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
  category: string;
}> = ({ title, thumbnail, year, rating, category }) => {
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector((state) => state.bookmarks.allBookmarks);
  const isBookmarked = bookmarks.find((c) => c.title === title);
  function onBookmarkClick() {
    dispatch(toggleBookmark(title));
  }

  return (
    <div className={classes["recommended-card"]}>
      <div
        className={classes.thumbnail}
        style={{ backgroundImage: `url(${thumbnail})` }}
      >
        <div className={classes.bookmark} onClick={onBookmarkClick}>
          <span>
            <img
              src={isBookmarked ? bookmarkedIcon : notBookmarkedIcon}
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
