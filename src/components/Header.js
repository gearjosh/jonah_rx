import React from 'react'
import logo from '../assets/logo.png'
import './styles/Header.scss'

function Header() {
  return (
    <div className="header">
      <div className="header-item">
        <img src={logo}></img>
      </div>
      <div className="header-item">
        <p>portfolio</p>
        <p>shop</p>
        <p>contact</p>
      </div>
    </div>
  )
}

export default Header
