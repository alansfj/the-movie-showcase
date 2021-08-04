import React, { useEffect, useState } from "react";
import { API_DATA } from "../App";
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
  }, [id, mediaType]);

  return (
    <>
      {data.status_code === 34 ? (
        <h2>{data.status_message}</h2>
      ) : (
        <div
          className="container-media-general-info"
          style={{
            backgroundImage: `url(${API_DATA.API_IMG_BASE_URL}original/${data.backdrop_path})`,
            backgroundSize: "cover",
          }}
        >
          <div className="img-filter">
            <div className="container-poster-info">
              {data.poster_path && (
                <img
                  src={`${API_DATA.API_IMG_BASE_URL}w342/${data.poster_path}`}
                  alt={"poster"}
                  className="poster-img"
                />
              )}
              <div className="media-info">
                <h2 className="media-title">
                  {data.title ||
                    data.original_title ||
                    data.name ||
                    data.original_name}
                  <span className="release-date">
                    {" "}
                    {data.release_date
                      ? `(${data.release_date}`.split("-")[0] + ")"
                      : `(${data.first_air_date}`.split("-")[0] + ")"}
                  </span>
                </h2>
                {/* <p>{...data.genres}</p> */}
                {data.genres &&
                  data.genres.map((el, i) => (
                    <span key={i} className="media-genres">
                      {el.name + ", "}
                    </span>
                  ))}
                <span>
                  {data.runtime && `${data.runtime}m`}
                  {data.episode_run_time && data.episode_run_time[0] + "m"}
                </span>
                <div className="media-vote-average">
                  Vote Average: {data.vote_average}
                </div>
                <p className="tagline">{data.tagline}</p>
                <div className="overview">
                  <div className="overview-title">Overview</div>
                  <p className="overview-text">{data.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaGeneralInfo;

// title, poster, voteAverage, id, name;