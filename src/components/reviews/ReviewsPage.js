import { useState, useEffect } from "react"

import ReviewsSearch from "./children/ReviewsSearch"
import ReviewsAll from "./children/ReviewsAll"
import AddNew from "../addnew/AddNew"


export default function ReviewsPage() {

  const [reviews, setReviews] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
    .then(r => r.json())
    .then(reviewsData => {
      setReviews(reviewsData)
    })
  }, [])

  console.log(reviews)

  const filteredReviews = reviews.filter(review => {
    return (
      review.title.toString().toLowerCase().includes(searchQuery.toLowerCase())
      || Number(review.rating).toString().includes(searchQuery.toString())
      || Number(review.hours).toString().includes(searchQuery.toString())
      || review.text.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <div>
      <h1>🍆 Reviews Hub 🍆</h1>
      <ReviewsSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ReviewsAll reviews={filteredReviews} />
      <AddNew />
    </div>
  )
}