import React, { useContext } from "react";
import languageContext from "../context/languageContext";

const PageNotFound = () => {
  const { texts } = useContext(languageContext);

  return (
    <div className="main-content">
      <h2>{texts.pageNotFound}</h2>
    </div>
  );
};

export default PageNotFound;
