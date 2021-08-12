import React, { createContext, useState } from "react";

const pageContext = createContext();

const PageProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  const datapage = {
    page,
    setPage,
  };

  return (
    <pageContext.Provider value={datapage}>{children}</pageContext.Provider>
  );
};

export default pageContext;
export { PageProvider };
