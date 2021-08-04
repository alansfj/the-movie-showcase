import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="main-content header-container">
        <div className="catalog-btns">
          <Link to="/movies">Movies</Link>
          <Link to="/tv">TV Shows</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
