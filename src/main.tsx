import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Index from './routes/root.tsx'
import Game from './components/Game.tsx'
import { loader as gameLoader } from './routes/game.tsx'
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <div>Something went wrong!!</div>,
    element: <App />,
    children: [
      {index: true, element: <Index />},
      {
        path:'/game/:mode',
        element: <Game />,
        loader: gameLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
