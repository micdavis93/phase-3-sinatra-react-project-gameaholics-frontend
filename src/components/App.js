import React from "react"
import { Route, Switch } from "react-router-dom";

import Header from "./Header"
import Footer from "./Footer"

import Home from "./children/Home"
import Games from "./children/Games"
import Gamers from "./children/Gamers"
import Reviews from "./children/Reviews"


export default function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/games">
          <Games />
        </Route>

        <Route path="/gamers">
          <Gamers />
        </Route>

        <Route path="/reviews">
          <Reviews />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}