import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Catalog from "./pages/Catalog";
import Homepage from "./pages/Homepage";
import Moviepage from "./pages/Moviepage";

export const API_DATA = {
  API_BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: "bac5bcab49dcd7fd43c3c79cc71573f9",
  API_TOKEN:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWM1YmNhYjQ5ZGNkN2ZkNDNjM2M3OWNjNzE1NzNmOSIsInN1YiI6IjYwZTc5NjU0Y2FhY2EyMDA0NTIzMmM3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ijWuL4gxJ2FlaYVixe_bjHXpxN0I4vkhT9XwFPnDY4s",
  API_IMG_BASE_URL: "http://image.tmdb.org/t/p/",
  API_SECURE_IMG_BASE_URL: "https://image.tmdb.org/t/p/",
};

const initialLanguage = "es";

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
  },
};

function App() {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(languagesObject[language]);

  return (
    <div>
      <Router>
        <Header
          setLanguage={setLanguage}
          texts={texts}
          setTexts={setTexts}
          languagesObject={languagesObject}
        />
        <Switch>
          <Route exact path="/">
            <Homepage language={language} texts={texts} />
          </Route>
          <Route path="/:media_type/:mediaId_Title">
            <Moviepage language={language} texts={texts} />
          </Route>
          <Route path="/:media_type">
            <Catalog language={language} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
