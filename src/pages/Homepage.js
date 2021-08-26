import React, { useContext } from "react";
import PreviewCarousel from "../components/PreviewCarousel";
import languageContext from "../context/languageContext";

const Homepage = () => {
  const { texts } = useContext(languageContext);

  return (
    <div className="main-content">
      <PreviewCarousel text={texts.trending} options first />
      <PreviewCarousel
        text={texts.votedMovies}
        fetchDataFrom="api.themoviedb.org/3/discover/movie/?sort_by=vote_count.desc"
      />
      <PreviewCarousel
        text={texts.votedTv}
        fetchDataFrom="api.themoviedb.org/3/discover/tv/?sort_by=vote_count.desc"
      />
    </div>
  );
};

export default Homepage;
