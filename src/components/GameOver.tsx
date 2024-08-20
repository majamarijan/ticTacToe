import GameOverBoy from '../assets/man.svg';
import SpeakBubble from '../assets/Mediamodifier-Design (4).svg'
import { NavLink, useLocation } from "react-router-dom";

export default function GameOver({winner}:{winner:string}) {
  const location = useLocation();
  console.log(location)
  return (
    <div className={`gameOver ${winner && 'showWinner'}`}>
        <div className="speakBubble">
          <img src={SpeakBubble} alt='message' width='100' height='300' />
          <p className="message">Winner is <strong style={{color: `${winner === 'X' ? 'red' : 'blue'}`}}>{winner}</strong>!!
            <NavLink to={location.pathname} reloadDocument>Play again?</NavLink>
            <NavLink to='/'>Return 👈</NavLink>
          </p>
        </div>
        <img src={GameOverBoy} alt='' className="manga"/>
      </div>
  )
}