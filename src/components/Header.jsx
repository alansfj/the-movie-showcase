import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

const Header = ({ match }) => {
  let location = useLocation();

  return (
    <div className="header">
      <div className="main-content header-container">
        <div className="catalog-btns">
          <Link
            to="/"
            className={`${location.pathname === "/" && "option-chosed"}`}
          >
            The Movie Showcase
          </Link>
          <Link
            to="/movie"
            className={`${location.pathname === "/movie" && "option-chosed"}`}
          >
            Movies
          </Link>
          <Link
            to="/tv"
            className={`${location.pathname === "/tv" && "option-chosed"}`}
          >
            TV Shows
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
