import { Link, NavLink } from "react-router-dom";

import { useAppDispatch } from "../../store/store";
import { resetFilters } from "../../store/filter-slice";
import { resetBookmarks } from "../../store/bookmarked-slice";

import logo from "../../assets/logo.svg";

import homeIcon from "../../assets/icon-nav-home.svg";
import movieIcon from "../../assets/icon-nav-movies.svg";
import seriesIcon from "../../assets/icon-nav-tv-series.svg";
import bookmarkIcon from "../../assets/icon-nav-bookmark.svg";

import avatar from "../../assets/image-avatar.png";

import classes from "./Sidebar.module.scss";

function Sidebar() {
  const dispatch = useAppDispatch();
  function resetHandler() {
    dispatch(resetFilters());
    dispatch(resetBookmarks());
  }
  return (
    <div className={classes.sidebar}>
      <div className={classes.links}>
        <div className={classes.logo}>
          <Link to="/entertainment-app/" onClick={resetHandler}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={classes.navigation}>
          <NavLink to="/entertainment-app/" onClick={resetHandler}>
            <img src={homeIcon} alt="Home" />
          </NavLink>
          <NavLink to="/entertainment-app/movies" onClick={resetHandler}>
            <img src={movieIcon} alt="Movies" />
          </NavLink>
          <NavLink to="/entertainment-app/series" onClick={resetHandler}>
            <img src={seriesIcon} alt="TV Series" />
          </NavLink>
          <NavLink to="/entertainment-app/bookmarked" onClick={resetHandler}>
            <img src={bookmarkIcon} alt="Bookmarks" />
          </NavLink>
        </div>
      </div>
      <div className={classes.avatar}>
        <img src={avatar} alt="User avatar" />
      </div>
    </div>
  );
}

export default Sidebar;
