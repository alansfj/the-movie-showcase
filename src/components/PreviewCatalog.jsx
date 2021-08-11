import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { API_DATA } from "../App";
import languageContext from "../context/languageContext";
import ButtonsCatalog from "./ButtonsCatalog";
import CardItem from "./CardItem";
import Loader from "./Loader";
import "./PreviewCatalog.scss";

const PreviewCatalog = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const { language } = useContext(languageContext);
  console.log(location);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${API_DATA.API_BASE_URL}/discover${location.pathname}?api_key=${
          API_DATA.API_KEY
        }&language=${language === "es" ? "es-MX" : language}&page=${
          location.search.split("=")[1]
        }`
      );

      const res_json = await res.json();

      //   console.log(res_json);

      setData(res_json.results);
    };

    fetchData();
  }, [location.pathname, language, location.search, page]);

  return (
    <div>
      <h2>Preview Catalog {location.pathname}</h2>
      <div className="grid-container">
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
                catalog
              />
            </Link>
          ))
        ) : (
          <Loader />
        )}
      </div>
      <ButtonsCatalog page={page} setPage={setPage} />
    </div>
  );
};

export default PreviewCatalog;
