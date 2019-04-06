import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Sign from "./Sign";
import LandingPage from "./LandingPage";

export default () =>
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Sign} />
    <Route path="/home" exact component={LandingPage} />
  </Switch>;
