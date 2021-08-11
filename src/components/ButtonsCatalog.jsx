import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./ButtonsCatalog.scss";

const ButtonsCatalog = ({ page, setPage }) => {
  const history = useHistory();
  const location = useLocation();

  const handleClick = e => {
    // console.log(e.target.textContent);
    setPage(page + 1);
    // console.log(history);
    // console.log(location);
    history.push(`${location.pathname}?page=${page}`);
  };

  return (
    <div className="btns-container">
      <button onClick={e => handleClick(e)}>Atras</button>
      <button onClick={e => handleClick(e)}>Primera</button>
      <button onClick={e => handleClick(e)}>-4</button>
      <button onClick={e => handleClick(e)}>-3</button>
      <button onClick={e => handleClick(e)}>-2</button>
      <button onClick={e => handleClick(e)}>-1</button>
      <button onClick={e => handleClick(e)} className="actual-btn">
        Actual:
      </button>
      <button onClick={e => handleClick(e)}>+1</button>
      <button onClick={e => handleClick(e)}>+2</button>
      <button onClick={e => handleClick(e)}>+3</button>
      <button onClick={e => handleClick(e)}>+4</button>
      <button onClick={e => handleClick(e)}>Ultima</button>
      <button onClick={e => handleClick(e)}>Siguiente</button>
    </div>
  );
};

export default ButtonsCatalog;
