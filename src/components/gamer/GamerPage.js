import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Item, Card } from 'semantic-ui-react'


export default function GamerPage() {

  const [gamer, setGamer] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    fetch(`http://localhost:9292/gamers/${id}`)
    .then(r => r.json())
    .then(gamerData => {
      setGamer(gamerData)
    })
  }, [id])

  const [gamers, setGamers] = useState([])
  useEffect(() => {
    fetch(`http://localhost:9292/gamers`)
    .then(r => r.json())
    .then(gamersData => {
      setGamers(gamersData)
    })
  }, [])

  const [games, setGames] = useState([])
  useEffect(() => {
    fetch(`http://localhost:9292/games`)
    .then(r => r.json())
    .then(gamesData => {
      setGames(gamesData)
    })
  }, [])

  if (!gamer) return <h2>Loading...</h2>;
  
  const gamerReviews = gamer.reviews.map((review) => {
    return (
      <Item>
        <Item.Image size='tiny' src={review.game.image} />
        <Item.Content>
          <Item.Header><strong>"{review.title}"</strong></Item.Header>
          <Item.Meta><em>{review.game.title} | {review.rating}/10</em></Item.Meta>
          <Item.Description>"{review.text}"</Item.Description>
        </Item.Content>
      </Item>
    )
  })
  
  // let favoriteGame
  // const sortArray = [gamer.reviews[0]];
  // const sortedGames = () => {    
  //   if (sortArray == true) {
  //     gamer.reviews.forEach((review) => {
  //       if (review.rating > sortArray[0].rating) {
  //         sortArray.unshift(review)
  //       } else {
  //         sortArray.push(review)
  //       }
  //       favoriteGame = sortArray[0].game.title
  //     })
  //   } else {
  //     if (games[(gamer.favorite)-1].title == true) {
  //       favoriteGame = games[(gamer.favorite)-1].title
  //     } else {
  //       favoriteGame = "?"
  //     }
  //   }
  // }
  // sortedGames()
  // console.log(sortArray)
  // console.log(games)
  // console.log(gamer.favorite)
  // console.log(games[6])
  // console.log(games[(gamer.favorite-1)])
  

  // const favoriteGame = games[(Number(gamer.favorite) - 1)]
  // console.log(favoriteGame.title)


  const otherGamers = gamers.filter((otherGamer) => {
    if (otherGamer.id != gamer.id) return otherGamer
  })
  const otherGamerCards = otherGamers.map((otherGamer) => {
    return (
      <Card 
        image={otherGamer.image}
        header={<Link to={`/gamers/${otherGamer.id}`}>{otherGamer.name}</Link>}
      />
    )
  })

  return (
    <>
      <div idName="gamer-detail">
        <Item.Image size='medium' src={gamer.image} />
        <Item.Content>
          {/* <Item.Header><strong>{gamer.name}</strong></Item.Header> */}
          <h2>{gamer.name}</h2>
          <Item.Meta>
            <em>Age{gamer.age} | {gamer.gender} | {gamer.origin}</em>
            <br></br>
            <em><strong>Favorite Game: </strong>{gamer.favorite}</em>
          </Item.Meta>
          <Item.Description>{gamer.bio}</Item.Description>
        </Item.Content>
      </div>
      <hr></hr>
      <h2>Reviews from this gamer:</h2>
      <div idName="gamer-reviews">
        {gamerReviews}
      </div>

      <hr></hr>
      
      <Card.Group itemsPerRow={5} >
        {otherGamerCards}
      </Card.Group>
    </>
  )
}