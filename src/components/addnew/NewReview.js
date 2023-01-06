import { useState, useEffect } from "react"

export default function NewReview() {
  
  // GET Games
  const [games, setGames] = useState([])
  useEffect(() => {
    fetch("http://localhost:9292/games")
    .then(r => r.json())
    .then(gamesData => {
      setGames(gamesData)
    })
  }, [])
  const gameOptions = games.map((game) => {
    return <option value={game.id}>{game.title}</option>
  })

  // GET Gamers
  const [gamers, setGamers] = useState([])
  useEffect(() => {
    fetch("http://localhost:9292/gamers")
    .then(r => r.json())
    .then(gamersData => {
      setGamers(gamersData)
    })
  }, [])
  const gamerOptions = gamers.map((gamer) => {
    return <option value={gamer.id}>{gamer.name}</option>
  })

  function numberSelect(max) {        
    const minutesArray = []
    for (let i=0; i<max; i++) {
      minutesArray.push(
        <option value={`${i}`}>{i}</option>
      )
    }
    return minutesArray
  }

  const initialFormValues = {
    title: "",
    rating: 0,
    hours: 0,
    review: "",
    game_id: 1,
    gamer_id: 1
  }

  const [formValues, setFormValues] = useState(initialFormValues)

  const handleFormValues = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value});
  }

  function handleFormSubmit(e) {
    e.preventDefault()

    const newReview = {
      title: formValues.title,
      rating: formValues.rating,
      hours: formValues.hours,
      text: formValues.text,
      game_id: formValues.game_id,
      gamer_id: formValues.gamer_id
    }

    // POST new review
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newReview)
    })

    e.target.reset()
  }

  return (
    <div className="ui segment">
      <h4>Add New Review:</h4>
      <form onSubmit={handleFormSubmit}>
        <div className="inline fields">
          <label><strong> Game Rating: </strong></label>
          <select id="rating" name="rating" onChange={handleFormValues}>
            {numberSelect(11)}
          </select>

          <label><strong> Hours Played: </strong></label>
          <select id="hours" name="hours" onChange={handleFormValues}>
            {numberSelect(500)}
          </select>

          <label><strong> Game: </strong></label>
          <select id="game_id" name="game_id" onChange={handleFormValues}>
            <option value={["unspecified"]} disabled selected>Select Game...</option>
            {gameOptions}
          </select>
        </div>

        <div className="inline fields">
          <label><strong> Gamer: </strong></label>
          <select id="gamer_id" name="gamer_id" onChange={handleFormValues}>
            <option value={["unspecified"]} disabled selected>Select Gamer...</option>
            {gamerOptions}
          </select>

          <label><strong> Review Title: </strong></label>
          <input type="text" name="title" placeholder="Enter Review Title..." onChange={handleFormValues} />
        </div>

        <div className="inline fields">
          <label><strong>Review Text: </strong></label>
          <textarea
            name="text"
            style={{width: "100%", height: "150px", padding: "12px"}}
            placeholder="Type Your Review..."
            onChange={handleFormValues}
          />
        </div>

        <button className="ui button" type="submit">
          Submit New Review
        </button>
      </form>
    </div>
  )
}