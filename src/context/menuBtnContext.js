import React, { createContext, useState } from "react";

const MenuBtnContext = createContext();

const MenuBtnProvider = ({ children }) => {
  const [isMenuBtnDisplayed, setIsMenuBtnDisplayed] = useState(true);

  const data = { isMenuBtnDisplayed, setIsMenuBtnDisplayed };

  return (
    <MenuBtnContext.Provider value={data}>{children}</MenuBtnContext.Provider>
  );
};

export default MenuBtnContext;
export { MenuBtnProvider };
