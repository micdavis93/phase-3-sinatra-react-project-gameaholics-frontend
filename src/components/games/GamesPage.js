import GamesSearch from "./children/GamesSearch"
import GamesAll from "./children/GamesAll"
import AddNew from "../AddNew"


export default function GamesPage() {



  return (
    <div>
      <h2>These are all the games.</h2>
      <GamesSearch />
      <GamesAll />
      <AddNew />
    </div>
  )
}