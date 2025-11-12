"use client"

import { useState } from "react"
import Link from "next/link" // <-- CHANGED: Import from next/link
import "./Header.css"
import logo from "./icon_png.png"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // This function closes the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  }

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
            {/* CHANGED: All links now use next/link and 'href' prop */}
            <li>
              <Link href="/#home" onClick={handleLinkClick}>Home</Link>
            </li>
            <li>
              <Link href="/#donations" onClick={handleLinkClick}>Donations</Link>
            </li>
            <li>
              <Link href="/#map" onClick={handleLinkClick}>Map</Link>
            </li>
            <li>
              <Link href="/volunteer" onClick={handleLinkClick}>Volunteer</Link>
            </li>
            <li>
              <Link href="/#awareness" onClick={handleLinkClick}>Impact</Link>
            </li>
            <li>
              <Link href="/supportus" onClick={handleLinkClick}>Support Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header