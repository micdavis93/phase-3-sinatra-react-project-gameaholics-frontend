import { Link } from "react-router-dom"


export default function AddNew() {



  return (
    <div>
      <hr></hr>
      <span>ADD NEW: <Link to={`/games/addnew`}>Game</Link> | <Link to={`/gamers/addnew`}>Gamer</Link> | <Link to={`/reviews/addnew`}>Review</Link>
      </span>
    </div>
  )
}