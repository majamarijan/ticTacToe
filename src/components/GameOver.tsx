import GameOverBoy from '../assets/man.svg';
import SpeakBubble from '../assets/Mediamodifier-Design (4).svg'
import { NavLink, useLocation } from "react-router-dom";

export default function GameOver({winner, reloadWinner}:{winner:string, reloadWinner: ()=> void}) {
  const location = useLocation();
  const message = winner === "Draw" ? "It's a draw" : `Winner is ${winner}!!`;
  return (
    <div className={`gameOver ${winner && 'showWinner'}`}>
        <div className="speakBubble">
          <img src={SpeakBubble} alt='message' width='100' height='300' />
          <p className="message">{message}
            <NavLink to={location.pathname} reloadDocument onClick={()=> reloadWinner()}>Play again?</NavLink>
            <NavLink to='/'>Return 👈</NavLink>
          </p>
        </div>
        <img src={GameOverBoy} alt='' className="manga"/>
      </div>
  )
}