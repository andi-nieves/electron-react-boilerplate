import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./Screens/App";
import SecondScreen from "./Screens/SecondScreen";


const history = require("history").createBrowserHistory();

const Routes = () => (
  <BrowserRouter history={history}>
    <Route key="r1" exact={true} path="/" component={App} />
    <Route key="r2" exact path="/SecondScreen" component={SecondScreen} />
  </BrowserRouter>
);

export default Routes;
