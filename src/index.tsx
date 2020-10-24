import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./layout/app/app";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../src/stort/index";
import { Provider } from "react-redux";
import { UPDATA_LOGIN } from "./stort/consts";

const state = window.localStorage.getItem("state");
if (state) {
  let data = JSON.parse(state);
  store.dispatch({ type: UPDATA_LOGIN, data: data });
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
