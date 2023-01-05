import { Card } from "semantic-ui-react";

import GameCard from "./GameCard"


export default function GamesAll({games}) {

  const mappedGames = games.map(game => {
    return <GameCard key={game.id} game={game} />
  })

  return (
    <Card.Group itemsPerRow={3} >
      {mappedGames}
    </Card.Group>
  )
}