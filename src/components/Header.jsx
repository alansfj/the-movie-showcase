import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

const Header = ({ setLanguage, texts, setTexts, languagesObject }) => {
  let location = useLocation();

  const changeLanguage = e => {
    setLanguage(e.target.value);
    setTexts(languagesObject[e.target.value]);
  };

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
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
