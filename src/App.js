import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// pages
import LandingPage from "./Components/LandingPage";
import Register from "./Components/Register";
const App = () => {
  return (
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
};

export default App;
