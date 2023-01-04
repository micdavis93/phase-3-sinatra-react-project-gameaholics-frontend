import React from "react"
import { Route, Switch } from "react-router-dom";

import Header from "./Header"
import Footer from "./Footer"

import HomePage from "./HomePage"
import GamesPage from "./games/GamesPage"
import GamersPage from "./gamers/GamersPage"
import ReviewsPage from "./reviews/ReviewsPage"


export default function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/games">
          <GamesPage />
        </Route>

        <Route path="/gamers">
          <GamersPage />
        </Route>

        <Route path="/reviews">
          <ReviewsPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}