import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Catalog from "./pages/Catalog";
import Homepage from "./pages/Homepage";
import Moviepage from "./pages/Moviepage";
import { LanguageProvider } from "./context/languageContext";
import { PageProvider } from "./context/pageContext";
import { MenuBtnProvider } from "./context/menuBtnContext";

export const API_DATA = {
  API_BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: "YOUR_API_KEY",
  API_IMG_BASE_URL: "http://image.tmdb.org/t/p/",
  API_SECURE_IMG_BASE_URL: "https://image.tmdb.org/t/p/",
};

function App() {
  return (
    <div className="app">
      <LanguageProvider>
        <PageProvider>
          <MenuBtnProvider>
            <Router>
              <Header />
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route
                  path="/:media_type/:mediaId_Title"
                  component={Moviepage}
                />
                <Route path="/:media_type" component={Catalog} />
              </Switch>
              <Footer />
            </Router>
          </MenuBtnProvider>
        </PageProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
