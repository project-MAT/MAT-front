import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
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
        </Switch>
      </Router>
    );
  }
}