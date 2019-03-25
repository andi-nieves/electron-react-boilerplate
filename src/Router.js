import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
// import { Route } from "react-router";
import App from "./App";
import SecondScreen from "./SecondScreen";
const history = require("history").createBrowserHistory();

const Routes = () => (
  <React.Fragment>
    <BrowserRouter history={history}>
      {/* <Switch> */}
        <Route key="r1" exact={true} path="/" component={App} />
        <Route
          key="r2"
          exact
          path="/SecondScreen"
          component={SecondScreen}
        />
      {/* </Switch> */}
    </BrowserRouter>
  </React.Fragment>
);

export default Routes;
