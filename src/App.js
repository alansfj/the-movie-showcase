import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Catalog from "./pages/Catalog";
import Homepage from "./pages/Homepage";
import Moviepage from "./pages/Moviepage";
import { LanguageProvider } from "./context/languageContext";

export const API_DATA = {
  API_BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: "bac5bcab49dcd7fd43c3c79cc71573f9",
  API_TOKEN:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWM1YmNhYjQ5ZGNkN2ZkNDNjM2M3OWNjNzE1NzNmOSIsInN1YiI6IjYwZTc5NjU0Y2FhY2EyMDA0NTIzMmM3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ijWuL4gxJ2FlaYVixe_bjHXpxN0I4vkhT9XwFPnDY4s",
  API_IMG_BASE_URL: "http://image.tmdb.org/t/p/",
  API_SECURE_IMG_BASE_URL: "https://image.tmdb.org/t/p/",
};

function App() {
  return (
    <div className="app">
      <LanguageProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/:media_type/:mediaId_Title">
              <Moviepage />
            </Route>
            <Route path="/:media_type">
              <Catalog />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </LanguageProvider>
    </div>
  );
}

export default App;
