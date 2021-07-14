import React from "react";
import { useParams } from "react-router-dom";

const Moviepage = () => {
  let { movieTitle } = useParams();

  return (
    <div className="main-content">
      <h2>Movie Page</h2>
      <h2>{movieTitle.replaceAll("_", " ")}</h2>
    </div>
  );
};

export default Moviepage;
