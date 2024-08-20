import './App.css'
import './fireworks.css'
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <Outlet />
    </div>
  )
}

