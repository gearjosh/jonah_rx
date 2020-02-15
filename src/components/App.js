import React from 'react'
import Header from './Header'
import heroLogo from '../assets/heroLogo.png'
import './styles/App.scss'

function App() {
  return (
    <div>
      <Header/>
      <div className="app-container">
        <div id="hero-logo">
          <img src={heroLogo}></img>
        </div>
      </div>
    </div>
  )
}

export default App
