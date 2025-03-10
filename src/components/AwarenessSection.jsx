import { useState } from "react"
import "./AwarenessSection.css"
import communityImage from "./community_1.jpeg"
import grocery from "./grocery.jpg"

function AwarenessSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const stories = [
    {
      id: 1,
      title: "Local Restaurant Saves 500kg of Food",
      content:
        "A downtown restaurant partnered with us to donate their surplus food, helping feed over 200 families in need last month.",
      image: "https://www.fidelity.com/bin-public/600_Fidelity_Com_English/images/learning-center/heros/how-to-save-money-when-dining-out_1171787426_banner.png",
    },
    {
      id: 2,
      title: "Community Garden Shares Harvest",
      content:
        "Volunteers from the community garden donated fresh produce weekly, providing nutritious options for local food banks.",
      image: communityImage.src,
    },
    {
      id: 3,
      title: "Grocery Store Reduces Waste by 75%",
      content:
        "Through our program, a local grocery chain has dramatically reduced their food waste while supporting vulnerable populations.",
      image: grocery.src,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === stories.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? stories.length - 1 : prev - 1))
  }

  return (
    <section className="section awareness-section" id="awareness">
      <div className="container">
        <h2 className="section-title">Making an Impact</h2>

        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">1.3B</div>
            <div className="stat-label">Tons of food wasted globally each year</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">33%</div>
            <div className="stat-label">Of all food produced is lost or wasted</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">10M</div>
            <div className="stat-label">People could be fed with recovered food</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">8%</div>
            <div className="stat-label">Of greenhouse gases come from food waste</div>
          </div>
        </div>

        <div className="success-stories">
          <h3>Success Stories</h3>

          <div className="carousel">
            <button className="carousel-btn prev" onClick={prevSlide}>
              &#10094;
            </button>

            <div className="carousel-content">
              {stories.map((story, index) => (
                <div key={story.id} className={`carousel-slide ${index === currentSlide ? "active" : ""}`}>
                  <div className="story-image">
                    <img src={story.image || "/placeholder.svg"} alt={story.title} />
                  </div>
                  <div className="story-content">
                    <h4>{story.title}</h4>
                    <p>{story.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-btn next" onClick={nextSlide}>
              &#10095;
            </button>
          </div>

          <div className="carousel-dots">
            {stories.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="impact-cta">
          <h3>Ready to Make a Difference?</h3>
          <p>Join our community of food rescuers and help us create a more sustainable future.</p>
          <div className="cta-buttons">
            <a href="#donations" className="btn">
              Donate Food
            </a>
            <a href="#volunteer" className="btn btn-secondary">
              Volunteer Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AwarenessSection