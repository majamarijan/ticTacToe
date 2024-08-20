import { NavLink } from "react-router-dom";

export default function Index() {
  return (
    <div className="frontPage">
      <h1>TIC TAC TOE</h1>
      <div className="buttons">
        <NavLink to='/game/normal'>Play 🤓 😎</NavLink>
        <NavLink to='/game/autoplay'>Play 🤓 💻</NavLink>
      </div>
    </div>
  )
}




