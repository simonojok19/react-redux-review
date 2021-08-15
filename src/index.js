import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { Provider as ReactReduxProvider } from "react-redux";

const store = configureStore();

render(
  <ReactReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReactReduxProvider>,
  document.getElementById("app")
);
