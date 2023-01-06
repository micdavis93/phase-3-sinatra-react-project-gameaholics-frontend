import { useState, useEffect } from "react"

import GamersSearch from "./children/GamersSearch"
import GamersAll from "./children/GamersAll"
import AddNew from "../addnew/AddNew"


export default function GamersPage() {

  const [gamers, setGamers] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetch("http://localhost:9292/gamers")
    .then(r => r.json())
    .then(gamersData => {
      setGamers(gamersData)
    })
  }, [])

  const filteredGamers = gamers.filter(gamer => {
    return (
      gamer.name.toString().toLowerCase().includes(searchQuery.toLowerCase())
      || Number(gamer.age).toString().includes(searchQuery)
      || gamer.origin.toString().toLowerCase().includes(searchQuery.toLowerCase())
      || gamer.gender.toString().toLowerCase().includes(searchQuery.toLowerCase())
      || gamer.favorite.toString().toLowerCase().includes(searchQuery.toLowerCase())
      || gamer.bio.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <div>
      <h1>🍆 GAMERS HUB 🍆</h1>
      <GamersSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <GamersAll gamers={filteredGamers} />
      <AddNew />
    </div>
  )
}