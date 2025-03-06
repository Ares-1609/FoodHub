import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>Food Rescue Hub</h3>
            <p>
              Connecting surplus food with those who need it most. Join our mission to reduce food waste and fight
              hunger in our communities.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="social-icon facebook"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="social-icon twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="social-icon instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="social-icon linkedin"></i>
              </a>
            </div>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
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
          </div>

          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>
              <i className="contact-icon location"></i> 123 Food St, Rescue City
            </p>
            <p>
              <i className="contact-icon phone"></i> (123) 456-7890
            </p>
            <p>
              <i className="contact-icon email"></i> info@foodrescuehub.org
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Food Rescue Hub. All rights reserved.</p>
          <p>
            <a href="#">Privacy Policy</a> |<a href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

