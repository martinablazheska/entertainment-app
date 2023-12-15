import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";

import homeIcon from "../../assets/icon-nav-home.svg";
import movieIcon from "../../assets/icon-nav-movies.svg";
import seriesIcon from "../../assets/icon-nav-tv-series.svg";
import bookmarkIcon from "../../assets/icon-nav-bookmark.svg";

import avatar from "../../assets/image-avatar.png";

import classes from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes.links}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={classes.navigation}>
          <NavLink to="/">
            <img src={homeIcon} alt="Home" />
          </NavLink>
          <NavLink to="/movies">
            <img src={movieIcon} alt="Movies" />
          </NavLink>
          <NavLink to="/series">
            <img src={seriesIcon} alt="TV Series" />
          </NavLink>
          <NavLink to="/bookmarked">
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
