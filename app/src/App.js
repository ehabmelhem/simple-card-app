import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import ActiveArticle from "./Articles/ActiveArticle"
import {articls} from "./Utils/articls";
import {useDispatch} from "react-redux"
import { addArticles } from "./redux/Action";
import React from "react";

function App() {
  const dispatch=useDispatch()
React.useEffect(()=>{
  dispatch(addArticles(articls))
},[])
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
