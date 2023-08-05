import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <header className='header'>
        <h1 className="logo">Russian Tech</h1>

        <nav className="nav-items">
            <li><a href="/">Главная</a></li>
            <li><a href="/">Обучение</a></li>
            <li><a href="/">Блог</a></li>
            <li><a href="/">Связь</a></li>
        </nav>
    </header>
  )
}

export default Navbar