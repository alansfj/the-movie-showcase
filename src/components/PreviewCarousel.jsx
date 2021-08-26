/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { API_DATA } from "../App";
import languageContext from "../context/languageContext";
import MenuBtnContext from "../context/menuBtnContext";
import CardItem from "./CardItem";
import Loader from "./Loader";
import "../sass/PreviewCarousel.scss";

const PreviewCarousel = ({ text, options, fetchDataFrom, first }) => {
  const [time, setTime] = useState("day");
  const [mediaType, setMediaType] = useState("movie");
  const [data, setData] = useState([]);
  const [scrollX, setScrollX] = useState(0);

  const refCarousel = useRef();
  const SCROLL_BY_CLICK = 225 * 2;
  const MIN_SCROLL_LIMIT = 0;
  let MAX_SCROLL_LIMIT = 3000;
  // console.log(MAX_SCROLL_LIMIT);

  const { texts, language } = useContext(languageContext);

  const { isMenuBtnDisplayed } = useContext(MenuBtnContext);

  useEffect(() => {
    const fetchData = async () => {
      let res;
      if (options) {
        res = await fetch(
          `https://api.themoviedb.org/3/trending/${mediaType}/${time}?api_key=${
            API_DATA.API_KEY
          }&language=${language === "es" ? "es-MX" : language}`
        );
      } else {
        res = await fetch(
          `https://${fetchDataFrom}&api_key=${API_DATA.API_KEY}&language=${language}`
        );
      }

      const res_json = await res.json();

      // console.log(res_json.results);

      setData(res_json.results);
    };

    fetchData();
  }, [time, mediaType, language]);

  const handleScrollClick = side => {
    // let MAX_SCROLL_LIMIT = refCarousel.current.scrollWidth;
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

  const carouselOptions = {
    carouselTimeOptions: [
      {
        id: 1,
        title: "day",
        label: texts.todayBtnLabel,
      },
      {
        id: 2,
        title: "week",
        label: texts.weekBtnLabel,
      },
    ],

    carouselMediaTypeOptions: [
      {
        id: 1,
        title: "movie",
        label: texts.moviesString,
      },
      {
        id: 2,
        title: "tv",
        label: texts.tvString,
      },
    ],
  };

  return (
    <div
      className={`${
        first && !isMenuBtnDisplayed && "first-carousel"
      } preview-carousel`}
    >
      <section className="carousel-header">
        <p>{text}</p>
        {options && (
          <div className="carousel-options">
            <div className="time-options">
              {carouselOptions.carouselTimeOptions.map(option => (
                <button
                  onClick={() => {
                    setTime(option.title);
                    resetScroll();
                  }}
                  className={`${
                    time === option.title && "option-chosed"
                  } carousel-option-btn`}
                  key={option.id}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="media-type-options">
              {carouselOptions.carouselMediaTypeOptions.map(option => (
                <button
                  onClick={() => {
                    setMediaType(option.title);
                    resetScroll();
                  }}
                  className={`${
                    mediaType === option.title && "option-chosed"
                  } carousel-option-btn`}
                  key={option.id}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
      <section className="container-scroll-btns">
        <button
          className={`${
            scrollX === MIN_SCROLL_LIMIT && "hidden"
          } scroll-btn scroll-btn-left`}
          onClick={e => {
            handleScrollClick("left");
          }}
        >
          {"<"}
        </button>
        <button
          className={`${
            scrollX > MAX_SCROLL_LIMIT && "hidden"
          } scroll-btn scroll-btn-right`}
          onClick={e => {
            handleScrollClick("right");
          }}
        >
          {">"}
        </button>
      </section>
      <section ref={refCarousel} className="carousel-preview-cards">
        {data.length === 20 ? (
          data.map((el, i) => (
            <Link
              key={i}
              to={el.title ? `/movie/${el.id}` : `/tv/${el.id}`}
              className="hvr-shrink"
            >
              <CardItem
                title={el.title || el.original_title}
                name={el.name || el.original_name}
                poster={el.poster_path}
                voteAverage={el.vote_average}
                id={el.id}
              />
            </Link>
          ))
        ) : (
          <Loader />
        )}
      </section>
    </div>
  );
};

export default PreviewCarousel;
