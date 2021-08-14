import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./about/HomePage";
import AboutPage from "./home/AboutPage";
import Header from "./common/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
