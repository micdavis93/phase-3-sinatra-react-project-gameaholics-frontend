import { Card } from "semantic-ui-react";
import GamerCard from "./GamerCard"


export default function GamersAll({gamers}) {

  const mappedGamers = gamers.map(gamer => {
    return <GamerCard key={gamer.id} gamer={gamer} />
  })

  return (
    <Card.Group itemsPerRow={3} >
      {mappedGamers}
    </Card.Group>
  )
}