import GamersSearch from "./children/GamersSearch"
import GamersAll from "./children/GamersAll"
import AddNew from "../AddNew"


export default function GamersPage() {

  

  return (
    <div>
      <h2>These are all the gamers.</h2>
      <GamersSearch />
      <GamersAll />
      <AddNew />
    </div>
  )
}