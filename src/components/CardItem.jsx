import React from "react";
import { API_DATA } from "../App";
import "./CardItem.scss";

const CardItem = ({ title, poster, voteAverage, name, addClass }) => {
  return (
    <div className={`container ${addClass}`}>
      <img
        src={`${API_DATA.API_IMG_BASE_URL}w185/${poster}`}
        alt={title}
        height="278"
        className="carousel-img"
      ></img>
      <div className="container-info">
        <p className="carousel-title ">{title || name}</p>
        <div className="carousel-vote-average">{voteAverage}</div>
      </div>
    </div>
  );
};

export default CardItem;
