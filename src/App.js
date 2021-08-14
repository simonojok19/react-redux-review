import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/about/HomePage";
import AboutPage from "./components/home/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </BrowserRouter>
  );
}
