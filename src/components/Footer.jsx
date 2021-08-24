import React, { useContext } from "react";
import languageContext from "../context/languageContext";
import "../sass/Footer.scss";

const Footer = () => {
  const { texts } = useContext(languageContext);

  return (
    <div className="footer">
      <p>{texts.footer}</p>
      <img
        style={{ width: "50px", marginLeft: "20px" }}
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
        alt="TMDb"
      />
    </div>
  );
};

export default Footer;
