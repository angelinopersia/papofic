import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import { config } from "./store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const overmind = createOvermind(config);

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
