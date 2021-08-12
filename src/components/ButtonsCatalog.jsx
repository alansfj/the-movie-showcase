import React, { useContext } from "react";
import languageContext from "../context/languageContext";
import pageContext from "../context/pageContext";
import "./ButtonsCatalog.scss";

const ButtonsCatalog = () => {
  const { texts } = useContext(languageContext);
  const { page, setPage } = useContext(pageContext);

  const handleClick = (e, num = 0, isFirst = false) => {
    if (num === 500) {
      setPage(500);
    } else if (isFirst) {
      setPage(num);
    } else {
      let sum = page + num;
      setPage(sum);
    }
  };

  return (
    <div className="btns-container">
      <div className="invisible"></div>
      {page > 1 && (
        <button onClick={e => handleClick(e, -1)} className="previous">
          {texts.catalogBtnPrevious}
        </button>
      )}

      {page > 5 && (
        <button onClick={e => handleClick(e, 1, true)} className="first">
          1
        </button>
      )}

      {page > 4 && (
        <button onClick={e => handleClick(e, -4)} className="m4">
          {page - 4}
        </button>
      )}
      {page > 3 && (
        <button onClick={e => handleClick(e, -3)} className="m3">
          {page - 3}
        </button>
      )}
      {page > 2 && (
        <button onClick={e => handleClick(e, -2)} className="m2">
          {page - 2}
        </button>
      )}

      {page > 1 && (
        <button onClick={e => handleClick(e, -1)} className="m1">
          {page - 1}
        </button>
      )}

      <button onClick={e => handleClick(e)} className="actual-btn">
        {page}
      </button>

      {!(page > 499) && (
        <button onClick={e => handleClick(e, 1)} className="p1">
          {page + 1}
        </button>
      )}

      {!(page > 498) && (
        <button onClick={e => handleClick(e, 2)} className="p2">
          {page + 2}
        </button>
      )}

      {!(page > 497) && (
        <button onClick={e => handleClick(e, 3)} className="p3">
          {page + 3}
        </button>
      )}

      {!(page > 496) && (
        <button onClick={e => handleClick(e, 4)} className="p4">
          {page + 4}
        </button>
      )}

      {page < 496 && (
        <button onClick={e => handleClick(e, 500)} className="last">
          500
        </button>
      )}

      {!(page > 499) && (
        <button onClick={e => handleClick(e, 1)} className="next">
          {texts.catalogBtnNext}
        </button>
      )}
    </div>
  );
};

export default ButtonsCatalog;
