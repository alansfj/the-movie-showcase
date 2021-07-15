import React from "react";
import { useParams } from "react-router-dom";
import MediaGeneralInfo from "../components/MediaGeneralInfo";

const Moviepage = () => {
  let { mediaId_Title } = useParams();
  let { media_type } = useParams();

  return (
    <div className="main-content">
      <h2>Movie Page</h2>
      <h2>{mediaId_Title}</h2>
      <h2>{mediaId_Title.split("-")[0]}</h2>
      <MediaGeneralInfo
        id={mediaId_Title.split("-")[0]}
        mediaType={media_type}
      />
    </div>
  );
};

export default Moviepage;
