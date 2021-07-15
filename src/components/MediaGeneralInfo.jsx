import React, { useEffect, useState } from "react";
import { API_DATA } from "../App";
import CardItem from "./CardItem";
import "./MediaGeneralInfo.scss";

const MediaGeneralInfo = ({ id, mediaType }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${API_DATA.API_BASE_URL}/${mediaType}/${id}?api_key=${API_DATA.API_KEY}`
      );
      const res_json = await res.json();

      console.log(res_json);

      setData(res_json);
    };

    fetchData();
  }, []);

  return (
    <div className="container-media-general-info">
      <figure className="figure">
        <div className="img-filter"></div>
        <img
          src={`${API_DATA.API_IMG_BASE_URL}original/${data.backdrop_path}`}
          alt="1"
          className="backdrop-img"
        ></img>
      </figure>
      <CardItem
        title={data.title || data.original_title}
        poster={data.poster_path}
        voteAverage={data.vote_average}
        name={data.name || data.original_name}
        addClass="position-absolute"
      />
    </div>
  );
};

export default MediaGeneralInfo;

// title, poster, voteAverage, id, name;
