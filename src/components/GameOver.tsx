import GameOverBoy from '../assets/man.svg';
import SpeakBubble from '../assets/Mediamodifier-Design (4).svg'
import { NavLink } from "react-router-dom";

export default function GameOver({pathname, winner}:{pathname:string, winner:string}) {
  return (
    <div className={`gameOver ${winner && 'showWinner'}`}>
        <div className="speakBubble">
          <img src={SpeakBubble} alt='message' width='100' height='300' />
          <p className="message">Winner is <strong>{winner}</strong>!!
            <NavLink to={`${pathname}`} reloadDocument>Play again?</NavLink>
            <NavLink to='/'>Return 👈</NavLink>
          </p>
        </div>
        <img src={GameOverBoy} alt='' className="manga"/>
      </div>
  )
}