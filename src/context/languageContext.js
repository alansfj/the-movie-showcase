import React, { createContext, useState } from "react";

const languageContext = createContext();

const initialLanguage = "en";
const languagesObject = {
  es: {
    moviesString: "Películas",
    tvString: "Series",
    headerLanguage: "Idioma",
    trending: "Tendencias",
    todayBtnLabel: "Hoy",
    weekBtnLabel: "Esta Semana",
    votedMovies: "Las Películas más Votadas",
    votedTv: "Las Series más Votadas",
    voteAverage: "Votación Promedio",
    overview: "Sinopsis",
    footer: "Toda la información mostrada es propiedad de TMDb",
    pageNotFound: "Error 404. Página no encontrada",
  },
  en: {
    moviesString: "Movies",
    tvString: "TV Shows",
    headerLanguage: "Language",
    trending: "Trending",
    todayBtnLabel: "Today",
    weekBtnLabel: "This Week",
    votedMovies: "The Most Voted Movies",
    votedTv: "The Most Voted TV Shows",
    voteAverage: "Vote Average",
    overview: "Overview",
    footer: "All information displayed is property of TMDb",
    pageNotFound: "Error 404. Page not found.",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(languagesObject[language]);

  const changeLanguage = e => {
    setLanguage(e.target.value);
    setTexts(languagesObject[e.target.value]);
  };

  const data = {
    texts,
    setTexts,
    language,
    setLanguage,
    languagesObject,
    changeLanguage,
  };

  return (
    <languageContext.Provider value={data}>{children}</languageContext.Provider>
  );
};

export default languageContext;
export { LanguageProvider };
