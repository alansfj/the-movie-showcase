import React, { memo } from "react";
import { API_DATA } from "../App";
import "../sass/CardItem.scss";

const CardItem = ({ title, poster, voteAverage, name, catalog }) => {
  return (
    <div className={`${catalog && "catalog"} container`}>
      <img
        src={
          poster
            ? `${API_DATA.API_SECURE_IMG_BASE_URL}w185/${poster}`
            : `https://via.placeholder.com/185x278.png?text=No+Image`
        }
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

export default memo(CardItem);
