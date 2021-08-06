import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import languageContext from "../context/languageContext";
import "./Header.scss";

const Header = () => {
  let location = useLocation();

  const { texts, changeLanguage } = useContext(languageContext);

  return (
    <div className="header">
      <div className="header-container main-content">
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
            {texts.moviesString}
          </Link>
          <Link
            to="/tv"
            className={`${location.pathname === "/tv" && "option-chosed"}`}
          >
            {texts.tvString}
          </Link>
        </div>
        <div className="language-select">
          <label htmlFor="languages">{texts.headerLanguage} </label>
          <select name="language" id="languages" onChange={changeLanguage}>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
