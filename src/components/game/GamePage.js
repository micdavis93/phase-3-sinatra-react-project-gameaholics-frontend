import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Item } from 'semantic-ui-react'

import AddNew from "../addnew/AddNew"


export default function GamePage() {

  const initialFormValues = {
    platform: "",
    price: 0
  }
  const [formValues, setFormValues] = useState(initialFormValues)

  const [game, setGame] = useState(null);
  const { id } = useParams()
  useEffect(() => {
    fetch(`http://localhost:9292/games/${id}`)
    .then(r => r.json())
    .then(gameData => {
      setGame(gameData)
    })
  }, [id])
  if (!game) return <h2>Loading...</h2>;

  const gameReviews = game.reviews.map((review) => {
    return (
      <Item>
        <Item.Image size='tiny' src={review.gamer.image} />
        <Item.Content>
          <Item.Header><strong>{review.title}</strong></Item.Header>
          <Item.Meta><em>by {review.gamer.name}</em></Item.Meta>
          <Item.Description>"{review.text}"</Item.Description>
        </Item.Content>
      </Item>
    )
  })


  function handleFormValues(e) {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  function handleEditSubmit(e) {
    // e.preventDefault()

    const newGameDetails = {
      platform: formValues.platform,
      price: Number(formValues.price)
    }

    fetch(`http://localhost:9292/games/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newGameDetails)
    })

    // e.target.reset()
  }

  function handleDelete() {
    console.log("deleted")
    fetch(`http://localhost:9292/games/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  return (
    <>
      <div idName="game-detail">
        <Item.Image size='medium' src={game.image} />
        <Item.Content>
          <Item.Header><strong>{game.title}</strong></Item.Header>
          <Item.Meta>
            <em>{game.year} | {game.genre} | {game.developer}</em>
            <br></br>
            <em>{game.platform} | ${game.price}</em>
          </Item.Meta>
          <Item.Description>{game.description}</Item.Description>
        </Item.Content>
      </div>
      <hr></hr>
      <div idName="edit-game">
        <h3>Change Game Details:</h3>
        <form onSubmit={handleEditSubmit}>
          <label><strong>Platform: </strong></label>
          <input type="text" name="platform" placeholder="Enter New Platform..." onChange={handleFormValues} />
          <label><strong>Price: </strong></label>
          <input type="text" name="price" placeholder="Enter New Price..." onChange={handleFormValues} />
          <button type="submit">
            Submit Changes
          </button>
        </form>
        <button onClick={handleDelete}>DELETE THIS GAME</button>
      </div>
      <hr></hr>
      <h2>Reviews of this game:</h2>
      <div idName="game-reviews">
        <Item.Group>
          {gameReviews}
        </Item.Group>
      </div>
      <AddNew />
    </>
  )
}


{/* <Item.Group link>
  <Item>
    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/stevie.jpg' />

    <Item.Content>
      <Item.Header>Stevie Feliciano</Item.Header>
      <Item.Description>{paragraph}</Item.Description>
    </Item.Content>
  </Item>

  <Item>
    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/veronika.jpg' />

    <Item.Content>
      <Item.Header>Veronika Ossi</Item.Header>
      <Item.Description>{paragraph}</Item.Description>
    </Item.Content>
  </Item>

  <Item>
    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />

    <Item.Content>
      <Item.Header>Jenny Hess</Item.Header>
      <Item.Description>{paragraph}</Item.Description>
    </Item.Content>
  </Item>
</Item.Group> */}