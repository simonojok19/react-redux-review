import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./about/HomePage";
import AboutPage from "./home/AboutPage";

export default function App() {
  return (
    <div className="container-fluid">
      <Route path="/" component={HomePage} exact />
      <Route path="/about" component={AboutPage} />
    </div>
  );
}
