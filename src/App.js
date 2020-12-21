import React from "react";
import { Route, Switch } from "react-router-dom";
// pages
import LandingPage from "./Components/LandingPage";
import Register from "./Components/Register";
import ReactGA from "react-ga";
import ReactPixel from "react-facebook-pixel";

const advancedMatching = { em: "some@email.com" }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
ReactPixel.init("271209034116124", advancedMatching, options);
ReactPixel.pageView(); // For tracking page view
ReactGA.initialize("UA-168778602-9");
ReactGA.pageview(window.location.pathname + window.location.search);
const App = () => {
  return (
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
};

export default App;
