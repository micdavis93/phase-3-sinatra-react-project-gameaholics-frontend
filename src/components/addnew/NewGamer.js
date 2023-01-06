import { useState, useEffect } from "react"


export default function NewGamer() {
  
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
    name: "",
    age: 0,
    origin: "",
    gender: "",
    favorite: "",
    bio: "",
    image: ""
  }

  const [formValues, setFormValues] = useState(initialFormValues)

  const handleFormValues = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value});
  }

  function handleFormSubmit(e) {
    e.preventDefault()

    const newGamer = {
      name: formValues.name,
      age: formValues.age,
      origin: formValues.origin,
      gender: formValues.gender,
      favorite: formValues.favorite,
      bio: formValues.bio,
      image: formValues.image
    }

    fetch("http://localhost:9292/gamers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newGamer)
    })

    e.target.reset()
  }

  return (
    <div className="ui segment">
      <h4>Add New Gamer:</h4>
      <form onSubmit={handleFormSubmit}>
        <div className="inline fields">
          <label><strong>Name: </strong></label>
          <input type="text" name="name" placeholder="Enter Gamer Name..." onChange={handleFormValues} />

          <label><strong> Age: </strong></label>
          <select id="age" name="age" onChange={handleFormValues}>
            {numberSelect(150)}
          </select>

          <label><strong> Gender: </strong></label>
          <select id="gender" name="gender" onChange={handleFormValues}>
            <option value={["unspecified"]} disabled selected>Select Gender...</option>
            <option value="F">F</option>
            <option value="M">M</option>
            <option value="NB">NB</option>
          </select>

          <label><strong> Origin: </strong></label>
          <input type="text" name="origin" placeholder="Enter Gamer Origin..." onChange={handleFormValues} />
        </div>

        <div className="inline fields">
          <label><strong>Favorite Game: </strong></label>
          <select id="favorite" name="favorite" onChange={handleFormValues}>
            <option value={["unspecified"]} disabled selected>Select Game...</option>
            {gameOptions}
          </select>

          <label><strong> Image: </strong></label>
          <input type="text" name="image" placeholder="Enter Gamer's Image URL..." onChange={handleFormValues} />
        </div>

        <div className="inline fields">
          <label><strong>Bio: </strong></label>
          <textarea
            name="bio"
            style={{width: "100%", height: "150px", padding: "12px"}}
            placeholder="Enter Gamer's Bio..."
            onChange={handleFormValues}
          />
        </div>

        <button className="ui button" type="submit">
          Submit New Gamer
        </button>
      </form>
    </div>
  )
}