import React from "react";
import PreviewCarousel from "../components/PreviewCarousel";

const Homepage = () => {
  return (
    <div>
      <h2>Homepage</h2>
      <PreviewCarousel text="Trending" options />
      <PreviewCarousel
        text="The Most Voted Movies"
        fetchDataFrom="https://api.themoviedb.org/3/discover/movie/?sort_by=vote_count.desc"
      />
      <PreviewCarousel
        text="The Most Voted TV Shows"
        fetchDataFrom="https://api.themoviedb.org/3/discover/tv/?sort_by=vote_count.desc"
      />
    </div>
  );
};

export default Homepage;
