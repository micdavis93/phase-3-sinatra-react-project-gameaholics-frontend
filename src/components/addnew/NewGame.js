import { useState } from "react"


export default function NewGame() {
  
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
    // e.preventDefault();
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

    fetch("http://localhost:9292/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newGame)
    })
  }

  return (
    <div className="ui segment">
      <h4>Add New Game:</h4>
      <form onSubmit={handleFormSubmit}>
        <div className="inline fields">
          <label><strong>Title: </strong></label>
          <input type="text" name="title" placeholder="Enter Game Title" onChange={handleFormValues} />
          <label><strong> Genre: </strong></label>
          <input type="text" name="genre" placeholder="Enter Game Genre" onChange={handleFormValues} />
          <label><strong> Release Year: </strong></label>
          <input type="text" name="year" placeholder="Enter Game Release Year" onChange={handleFormValues} />
        </div>
      </form>
    </div>
  )
}