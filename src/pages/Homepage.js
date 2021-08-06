import React from "react";
import PreviewCarousel from "../components/PreviewCarousel";

const Homepage = ({ language, texts }) => {
  return (
    <div className="main-content">
      <PreviewCarousel
        text={texts.trending}
        options
        language={language}
        texts={texts}
      />
      <PreviewCarousel
        text={texts.votedMovies}
        fetchDataFrom="https://api.themoviedb.org/3/discover/movie/?sort_by=vote_count.desc"
        language={language}
        texts={texts}
      />
      <PreviewCarousel
        text={texts.votedTv}
        fetchDataFrom="https://api.themoviedb.org/3/discover/tv/?sort_by=vote_count.desc"
        language={language}
        texts={texts}
      />
    </div>
  );
};

export default Homepage;
