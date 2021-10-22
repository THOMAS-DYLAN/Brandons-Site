import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import { Route } from "react-router";
import Home from "./Pages/Home";
import Media from "./Pages/Media";
import Services from "./Pages/Services";
import PriceCalc from "./Pages/PriceCalc";
import About from "./Pages/About";

function App() {
  return (
    <div className="app">
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/media">
        <Media />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/cart">
        <PriceCalc />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
