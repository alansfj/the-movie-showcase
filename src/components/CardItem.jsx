import React from "react";
import { API_DATA } from "../App";
import "./CardItem.scss";

const CardItem = ({ title, poster }) => {
  return (
    <div className="container">
      <img
        src={`${API_DATA.API_IMG_BASE_URL}w185/${poster}`}
        alt={title}
        height="278"
        className="carousel-img"
      ></img>

      <p className="carousel-title">{title}</p>
    </div>
  );
};

export default CardItem;