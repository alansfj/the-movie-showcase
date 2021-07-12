import React, { useState, useEffect, useRef } from "react";
import { API_DATA } from "../App";
import CardItem from "./CardItem";
import Loader from "./Loader";
import "./PreviewCarousel.scss";

const PreviewCarousel = ({ text }) => {
  const [time, setTime] = useState("day");
  const [mediaType, setMediaType] = useState("movie");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/${mediaType}/${time}?api_key=${API_DATA.API_KEY}`
      );

      const res_json = await res.json();

      //   console.log(res_json.results);

      setData(res_json.results);
    };

    fetchData();

    // return () => {
    //     cleanup
    // }
  }, [time, mediaType]);

  //   const addClickedStyle = e => {
  //     e.target.style = "color: red;";
  //   };

  return (
    <div className="preview-carousel">
      <h3>Preview Carousel</h3>
      <section className="carousel-header">
        <p>{text}</p>
        <div className="carousel-options">
          <div className="time-options">
            {time === "day" ? (
              <button
                onClick={() => setTime("day")}
                className="carousel-option-btn option-chosed"
              >
                Today
              </button>
            ) : (
              <button
                onClick={() => setTime("day")}
                className="carousel-option-btn"
              >
                Today
              </button>
            )}
            {time === "week" ? (
              <button
                onClick={() => setTime("week")}
                className="carousel-option-btn option-chosed"
              >
                This Week
              </button>
            ) : (
              <button
                onClick={() => setTime("week")}
                className="carousel-option-btn"
              >
                This Week
              </button>
            )}
          </div>
          <div className="media-type-options">
            {mediaType === "movie" ? (
              <button
                onClick={() => setMediaType("movie")}
                className="carousel-option-btn option-chosed"
              >
                Movie
              </button>
            ) : (
              <button
                onClick={() => setMediaType("movie")}
                className="carousel-option-btn"
              >
                Movie
              </button>
            )}
            {mediaType === "tv" ? (
              <button
                onClick={() => setMediaType("tv")}
                className="carousel-option-btn option-chosed"
              >
                TV Show
              </button>
            ) : (
              <button
                onClick={() => setMediaType("tv")}
                className="carousel-option-btn"
              >
                TV Show
              </button>
            )}
          </div>
        </div>
      </section>
      <section className="carousel-preview-cards">
        {data.length === 20 ? (
          data.map((el, i) => (
            <CardItem
              key={i}
              title={
                el.title || el.original_title || el.name || el.original_name
              }
              poster={el.poster_path}
            />
          ))
        ) : (
          <Loader />
        )}
      </section>
    </div>
  );
};

export default PreviewCarousel;
