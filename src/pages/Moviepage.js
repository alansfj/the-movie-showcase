import React from "react";
import { useParams } from "react-router-dom";
import MediaGeneralInfo from "../components/MediaGeneralInfo";

const Moviepage = () => {
  const { media_type } = useParams();
  const { mediaId_Title } = useParams();

  return (
    <div className="main-content" style={{ marginTop: "0" }}>
      <MediaGeneralInfo
        id={mediaId_Title.split("-")[0]}
        mediaType={media_type}
      />
    </div>
  );
};

export default Moviepage;
