import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Page404 from "./Page404";
import Start from "./Start";
import Testapi from "./Testapi";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Testapi" component={Testapi} />
          <Route exact path="/Page404" component={Page404} />
        </Switch>
      </Router>
    );
  }
}