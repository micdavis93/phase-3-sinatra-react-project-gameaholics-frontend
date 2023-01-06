import { useEffect, useState } from "react"

import GamesSearch from "./children/GamesSearch"
import GamesAll from "./children/GamesAll"
import AddNew from "../addnew/AddNew"


export default function GamesPage() {

  const [games, setGames] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetch("http://localhost:9292/games")
    .then(r => r.json())
    .then(gamesData => {
      setGames(gamesData)
    })
  }, [])

  console.log(games)

  const filteredGames = games.filter(game => {
    return (
      game.title.toString().toLowerCase().includes(searchQuery.toLowerCase())
      || game.genre.toString().toLowerCase().includes(searchQuery.toLowerCase())
      || game.platform.toString().toLowerCase().includes(searchQuery.toLowerCase())
      || Number(game.year).toString().includes(searchQuery)
      || game.developer.toString().toLowerCase().includes(searchQuery.toLowerCase())
      || Number(game.price).toString().includes(searchQuery)
    )
  })

  return (
    <div>
      <h2>These are all the games.</h2>
      <GamesSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <GamesAll games={filteredGames} />
      <AddNew />
    </div>
  )
}