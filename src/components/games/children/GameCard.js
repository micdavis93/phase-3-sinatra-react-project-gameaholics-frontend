import { Link } from "react-router-dom"
import { Card } from "semantic-ui-react"


export default function GameCard({game}) {

  const {id, title, genre, platform, image, description, year, developer, price} = game

  return (
    <Card 
      image={image}
      header={title}
      meta={`${developer} | ${genre} | ${platform}`}
      meta={`MSRP: $${price} | Released in ${year}`}
      
      description={description}

      extra={<Link to={`/games/${id}`}>More Information</Link>}
    />
  )
}