import ReviewsSearch from "./children/ReviewsSearch"
import ReviewsAll from "./children/ReviewsAll"
import AddNew from "../AddNew"


export default function ReviewsPage() {



  return (
    <div>
      <h2>These are all the reviews.</h2>
      <ReviewsSearch />
      <ReviewsAll />
      <AddNew />
    </div>
  )
}