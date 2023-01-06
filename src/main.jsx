import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './style.css'
import { TareasApp } from './TareasApp'
//import { TareasApp } from './TareasApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <BrowserRouter>
    <TareasApp />
  </BrowserRouter>
  //</React.StrictMode>,
)
