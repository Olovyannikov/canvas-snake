import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import {Game} from "./widgets/Game";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
)
