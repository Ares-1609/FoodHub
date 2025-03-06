import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Hero.css";
import poor1 from "./poor1.jpg";
import poor2 from "./poor2.webp";
import poor3 from "./poor3.webp";

function Hero() {
  // Debugging: Log the imported image paths
  console.log("poor1:", poor1);
  console.log("poor2:", poor2);
  console.log("poor3:", poor3);

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Rescue Food, Feed Communities</h1>
          <p>
            Connecting surplus food with those who need it most. Join our mission to reduce food waste and fight hunger
            in our communities.
          </p>
          <div className="hero-buttons">
            <a href="#donations" className="btn">
              Donate Food
            </a>
            <a href="#volunteer" className="btn btn-secondary">
              Volunteer
            </a>
          </div>
        </div>
        <div className="hero-image">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div>
              <img src={poor1.src} alt="Food donation 1" />
            </div>
            <div>
              <img src={poor2.src} alt="Food donation 2" />
            </div>
            <div>
              <img src={poor3.src} alt="Food donation 3" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Hero;