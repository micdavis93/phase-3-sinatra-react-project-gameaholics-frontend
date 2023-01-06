import { Item } from 'semantic-ui-react'
import ReviewCard from "../children/ReviewCard"


export default function ReviewsAll({reviews}) {

  const mappedReviews = reviews.map(review => {
    return <ReviewCard key={review.id} review={review} />
  })

  return (
    <Item.Group >
      {mappedReviews}
    </Item.Group>
  )
}