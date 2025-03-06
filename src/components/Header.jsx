"use client"

import { useState } from "react"
import "./Header.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>Food Rescue Hub</h1>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#donations">Donations</a>
            </li>
            <li>
              <a href="#map">Map</a>
            </li>
            <li>
              <a href="#volunteer">Volunteer</a>
            </li>
            <li>
              <a href="#awareness">Impact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

