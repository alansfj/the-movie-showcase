import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PreviewCatalog from "../components/PreviewCatalog";

import PageNotFound from "./PageNotFound";

const Catalog = () => {
  const { media_type } = useParams();

  useEffect(() => {}, [media_type]);

  return (
    <div className="main-content">
      {media_type === "movie" || media_type === "tv" ? (
        <PreviewCatalog />
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

export default Catalog;
