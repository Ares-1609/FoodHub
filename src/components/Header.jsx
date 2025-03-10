"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import "./Header.css"
import logo from "./icon_png.png"
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-container">
      <div className="logo1">
          <img src={logo.src} alt="FoodHub Logo" />
        </div>
        <div className="logo">
          <h1>FoodHub</h1>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <HashLink smooth to="/#home">Home</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#donations">Donations</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#map">Map</HashLink>
            </li>
            <li>
              <Link to="/volunteer">Volunteer</Link>
            </li>
            <li>
              <HashLink smooth to="/#awareness">Impact</HashLink>
            </li>
            <li>
              <Link to="/supportus">Support Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header