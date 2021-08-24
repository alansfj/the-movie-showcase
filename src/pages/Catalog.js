import React from "react";
import { useParams } from "react-router-dom";
import PreviewCatalog from "../components/PreviewCatalog";

import PageNotFound from "./PageNotFound";

const Catalog = () => {
  const { media_type } = useParams();

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
