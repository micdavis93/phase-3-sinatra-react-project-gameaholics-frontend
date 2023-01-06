


export default function ReviewsSearch({searchQuery, setSearchQuery}) {
  
  function handleChange(event) {
    setSearchQuery(event.target.value)
    console.log(searchQuery)
  }

  return (
    <div style={{padding: "10px"}}>
      <label htmlFor="search">Search:  </label>
      <input
        type="text"
        id="search"
        placeholder="Search for your favorite review..."
        value={searchQuery}
        onChange={(e) => handleChange(e)}
        style={{width: "300px"}}
      />
    </div>
  )
}