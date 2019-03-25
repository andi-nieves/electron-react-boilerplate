import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import theme from "./Theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

import App from "./Router";
import Sidebar from "./Components/Sidebar";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Sidebar />
    <div style={{ marginLeft: 250 }}>
      <App />
    </div>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
