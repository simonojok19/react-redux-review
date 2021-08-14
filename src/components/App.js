import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./about/HomePage";
import AboutPage from "./home/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
