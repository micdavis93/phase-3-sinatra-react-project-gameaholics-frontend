import { Link } from "react-router-dom"
import { Card } from "semantic-ui-react"


export default function gamerCard({gamer}) {

  const {id, name, age, origin, gender, bio, image} = gamer

  return (
    <Card 
      image={image}
      header={name}
      meta={`${age} | ${gender} | ${origin}`}
      
      description={`${bio.substring(0,300)}...`}

      extra={<Link to={`/gamers/${id}`}>More Information</Link>}
    />
  )
}