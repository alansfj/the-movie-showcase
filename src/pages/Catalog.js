import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

const Catalog = ({ texts }) => {
  const { media_type } = useParams();

  useEffect(() => {}, [media_type]);

  return (
    <div className="main-content">
      {media_type === "movie" || media_type === "tv" ? (
        <h2>Catalog</h2>
      ) : (
        <PageNotFound texts={texts} />
      )}
    </div>
  );
};

export default Catalog;
