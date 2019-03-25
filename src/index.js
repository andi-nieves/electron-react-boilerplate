import React from "react";
import ReactDOM from "react-dom";
import App from "./Router";
import registerServiceWorker from "./registerServiceWorker";
// import injectTapEventPlugin from 'react-tap-event-plugin';
//TMP dependacy for material
// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
