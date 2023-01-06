import React from "react"
import { Route, Switch } from "react-router-dom";

import Header from "./Header"
import Footer from "./Footer"

import HomePage from "./HomePage"
import GamesPage from "./games/GamesPage"
import GamePage from "./game/GamePage"
import NewGame from "./addnew/NewGame"
import GamersPage from "./gamers/GamersPage"
import GamerPage from "./gamer/GamerPage"
import NewGamer from "./addnew/NewGamer"
import ReviewsPage from "./reviews/ReviewsPage"
import ReviewPage from "./review/ReviewPage"
import NewReview from "./addnew/NewReview"


export default function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/games/addnew">
          <NewGame />
        </Route>
        <Route path="/games/:id">
          <GamePage />
        </Route>
        <Route path="/games">
          <GamesPage />
        </Route>

        
        <Route path="/gamers/addnew">
          <NewGamer />
        </Route>
        <Route path="/gamers/:id">
          <GamerPage />
        </Route>
        <Route path="/gamers">
          <GamersPage />
        </Route>


        <Route path="/reviews/addnew">
          <NewReview />
        </Route>
        <Route path="/reviews/:id">
          <ReviewPage />
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