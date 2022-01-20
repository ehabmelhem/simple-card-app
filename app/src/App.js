import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./MainPage";

function App() {
  return (
    <Router>
      <div className="container">
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
