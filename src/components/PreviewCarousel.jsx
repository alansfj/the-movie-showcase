import React, { useState, useEffect, useRef } from "react";
import { API_DATA } from "../App";
import CardItem from "./CardItem";
import Loader from "./Loader";
import "./PreviewCarousel.scss";

const PreviewCarousel = ({ text }) => {
  const [time, setTime] = useState("day");
  const [mediaType, setMediaType] = useState("movie");
  const [data, setData] = useState([]);
  const [scrollX, setScrollX] = useState(0);

  const refCarousel = useRef();
  const SCROLL_BY_CLICK = 225 * 2;
  const MIN_SCROLL_LIMIT = 0;
  const MAX_SCROLL_LIMIT = 2700;

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
  }, [time, mediaType]);

  const handleScrollClick = side => {
    if (side === "left" && scrollX > MIN_SCROLL_LIMIT) {
      setScrollX(scrollX - SCROLL_BY_CLICK);
      refCarousel.current.scrollLeft = scrollX - SCROLL_BY_CLICK;
    } else if (side === "right" && scrollX < MAX_SCROLL_LIMIT) {
      setScrollX(scrollX + SCROLL_BY_CLICK);
      refCarousel.current.scrollLeft = scrollX + SCROLL_BY_CLICK;
    }
  };

  const resetScroll = () => {
    setScrollX(MIN_SCROLL_LIMIT);
    refCarousel.current.scrollLeft = MIN_SCROLL_LIMIT;
  };

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
                onClick={() => {
                  setTime("day");
                  resetScroll();
                }}
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
                onClick={() => {
                  setTime("week");
                  resetScroll();
                }}
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
                onClick={() => {
                  setMediaType("movie");
                  resetScroll();
                }}
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
                onClick={() => {
                  setMediaType("tv");
                  resetScroll();
                }}
                className="carousel-option-btn"
              >
                TV Show
              </button>
            )}
          </div>
        </div>
      </section>
      <section className="container-scroll-btns">
        {scrollX === MIN_SCROLL_LIMIT ? (
          <button
            className="scroll-btn scroll-btn-left hidden"
            onClick={e => {
              handleScrollClick("left");
            }}
          >
            {"<"}
          </button>
        ) : (
          <button
            className="scroll-btn scroll-btn-left"
            onClick={e => {
              handleScrollClick("left");
            }}
          >
            {"<"}
          </button>
        )}
        {scrollX === MAX_SCROLL_LIMIT ? (
          <button
            className="scroll-btn scroll-btn-right hidden"
            onClick={e => {
              handleScrollClick("right");
            }}
          >
            {">"}
          </button>
        ) : (
          <button
            className="scroll-btn scroll-btn-right"
            onClick={e => {
              handleScrollClick("right");
            }}
          >
            {">"}
          </button>
        )}
      </section>
      <section ref={refCarousel} className="carousel-preview-cards">
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
