import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import ActiveArticle from "./Articles/ActiveArticle"
function App() {
  return (
    <Router>
      <div className="container">
        <ActiveArticle/>
      <Switch>
        <Route path="/">
            <MainPage/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
