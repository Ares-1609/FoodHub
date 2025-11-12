"use client"; // <-- ADDED THIS

import Link from "next/link"; // <-- CHANGED THIS
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>FoodHub</h3>
            <p>
              Connecting surplus food with those who need it most. Join our mission to reduce food waste and fight
              hunger in our communities.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                {/* Changed "to" to "href" and removed "smooth" */}
                <Link href="/#home">Home</Link>
              </li>
              <li>
                <Link href="/#donations">Donations</Link>
              </li>
              <li>
                <Link href="/#map">Map</Link>
              </li>
              <li>
                <Link href="/volunteer">Volunteer</Link>
              </li>
              <li>
                <Link href="/#awareness">Impact</Link>
              </li>
              <li>
                <Link href="/supportus">Support Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>
              <i className="fas fa-map-marker-alt contact-icon location"></i> VIT Chennai, Mauritius
            </p>
            <p>
              <i className="fas fa-phone contact-icon phone"></i> +91 8125783581
            </p>
            <p>
              <i className="fas fa-envelope contact-icon email"></i> info@foodrescuehub.org
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Food Rescue Hub. All rights reserved.</p>
          <p>
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;