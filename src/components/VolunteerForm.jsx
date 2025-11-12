import React, { useState } from "react";
import "./VolunteerForm.css";
import LoginForm from "./LoginForm"

function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "",
    interests: [],
    message: "",
    password: "", // Added password field
  });

  const [submitted, setSubmitted] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // State to toggle forms

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        interests: [...formData.interests, value],
      });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter((interest) => interest !== value),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://3.236.193.139:5000/api/volunteers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        setSubmitted(true);

        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            availability: "",
            interests: [],
            message: "",
            password: "", // Added password field
          });
          setSubmitted(false);
        }, 3000);
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <section className="section volunteer-section" id="volunteer">
      <div className="shape-circle1"></div>
      <div className="shape-circle2"></div>
      <div className="shape-circle3"></div>
      <div className="container">
        <h2 className="section-title">Become a Volunteer</h2>

        <div className="volunteer-container">
          <div className="volunteer-info">
            <h3>Why Volunteer?</h3>
            <p>
              By volunteering with Food Rescue Hub, you're making a direct impact on reducing food waste and helping
              those in need in your community. Your efforts will not only provide meals to those who are hungry but also
              contribute to a more sustainable environment by reducing food waste.
            </p>
            <p>
              Volunteering is a rewarding experience that allows you to connect with like-minded individuals, develop new
              skills, and make a tangible difference in your community. Whether you have a few hours a week or can commit
              to a regular schedule, your contribution is invaluable.
            </p>
            <h3>What You Can Do</h3>
            <ul>
              <li>Pick up and deliver food donations</li>
              <li>Help sort and organize at food banks</li>
              <li>Assist with community outreach</li>
              <li>Contribute to awareness campaigns</li>
              <li>Support administrative tasks</li>
              <li>Participate in fundraising events</li>
            </ul>
            <h3>Benefits of Volunteering</h3>
            <p>
              Volunteering with Food Rescue Hub offers numerous benefits, including:
            </p>
            <ul>
              <li>Gaining valuable experience and skills</li>
              <li>Building a network of like-minded individuals</li>
              <li>Making a positive impact in your community</li>
              <li>Enhancing your resume and career prospects</li>
              <li>Experiencing personal growth and fulfillment</li>
            </ul>
            <h3>Join Us Today!</h3>
            <p>
              No matter your background or experience, there is a role for you at Food Rescue Hub. Join us in our mission
              to create a world where no food goes to waste and everyone has access to nutritious meals.
            </p>
          </div>

          <div className="volunteer-form-container">
            {submitted ? (
              <div className="form-success">
                <h3>Thank you for signing up!</h3>
                <p>We'll contact you soon with more information.</p>
              </div>
            ) : showLogin ? (
              <LoginForm setShowLogin={setShowLogin} />
            ) : (
              <form className="volunteer-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="availability">Availability</label>
                  <select
                    id="availability"
                    name="availability"
                    className="form-control"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="evenings">Evenings</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Areas of Interest</label>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="interests"
                        value="food-pickup"
                        checked={formData.interests.includes("food-pickup")}
                        onChange={handleCheckboxChange}
                      />
                      Pickup
                    </label>

                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="interests"
                        value="sorting"
                        checked={formData.interests.includes("sorting")}
                        onChange={handleCheckboxChange}
                      />
                      Organizing
                    </label>

                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="interests"
                        value="outreach"
                        checked={formData.interests.includes("outreach")}
                        onChange={handleCheckboxChange}
                      />
                      Outreach
                    </label>

                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="interests"
                        value="admin"
                        checked={formData.interests.includes("admin")}
                        onChange={handleCheckboxChange}
                      />
                      Support
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn">
                  Sign Up as Volunteer
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setShowLogin(true)}
                >
                  Already a Volunteer? Login
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VolunteerForm;
