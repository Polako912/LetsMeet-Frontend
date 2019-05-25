import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Sign from "./Sign";
import LandingPage from "../home/LandingPage";
import CreateEvent from "../home/CreateEvent";

export default () =>
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Sign} />
    <Route path="/home" exact component={LandingPage} />
    <Route path="/createevent" exact component={CreateEvent} />
  </Switch>;
