import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Page404 from "./Page404";
import Start from "./Start";
import App from "./App";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Page404" component={Page404} />
          <Route exact path="/App" component={App} />
        </Switch>
      </Router>
    );
  }
}