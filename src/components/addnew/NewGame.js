import { useState } from "react"


export default function NewGame() {
  
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
    genre: "",
    platform: "",
    image: "",
    description: "",
    year: 0,
    developer: "",
    price: 0
  }

  const [formValues, setFormValues] = useState(initialFormValues)

  const handleFormValues = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value});
  }

  function handleFormSubmit(e) {
    e.preventDefault()

    const newGame = {
      title: formValues.title,
      genre: formValues.genre,
      platform: formValues.platform,
      image: formValues.image,
      description: formValues.description,
      year: Number(formValues.year),
      developer: formValues.developer,
      price: Number(formValues.price)
    }

    // POST New Game
    fetch("http://localhost:9292/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newGame)
    })

    e.target.reset()
  }

  return (
    <div className="ui segment">
      <h4>Add New Game:</h4>
      <form onSubmit={handleFormSubmit}>
        <div className="inline fields">
          <label><strong>Title: </strong></label>
          <input type="text" name="title" placeholder="Enter Game Title..." onChange={handleFormValues} />

          <label><strong> Genre: </strong></label>
          <input type="text" name="genre" placeholder="Enter Game Genre..." onChange={handleFormValues} />

          <label><strong> Release Year: </strong></label>
          <input type="text" name="year" placeholder="Enter Game Release Year..." onChange={handleFormValues} />
        </div>

        <div className="inline fields">
          <label><strong>Platform: </strong></label>
          <input type="text" name="platform" placeholder="Enter Game Platform..." onChange={handleFormValues} />

          <label><strong> Developer: </strong></label>
          <input type="text" name="developer" placeholder="Enter Game Developer..." onChange={handleFormValues} />

          <label><strong> Price: $</strong></label>
          <select id="price" name="price" onChange={handleFormValues}>
            {numberSelect(100)}
          </select>
        </div>

        <div className="inline fields">
          <label><strong>Image: </strong></label>
          <input type="text" name="image" placeholder="Enter Image URL..." onChange={handleFormValues} />
        </div>

        <div className="inline fields">
          <label><strong>Description: </strong></label>
          <textarea
            name="description"
            style={{width: "100%", height: "150px", padding: "12px"}}
            placeholder="Enter Game Description..."
            onChange={handleFormValues}
          />
        </div>

        <button className="ui button" type="submit">
          Submit New Game
        </button>
      </form>
    </div>
  )
}