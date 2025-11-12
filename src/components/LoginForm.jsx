"use client"; // <-- ADDED THIS

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // <-- CHANGED THIS
import "./VolunteerForm.css";

function LoginForm({ setShowLogin }) {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter(); // <-- CHANGED THIS

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://3.236.193.139:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        setErrorMessage("");
        setLoginFormData({ email: "", password: "" });

        // Redirect to homepage after 1s
        setTimeout(() => {
          router.push("/"); // <-- CHANGED THIS
        }, 1000);
      } else {
        setErrorMessage(data.message);
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error submitting login form:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <form className="volunteer-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={loginFormData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={loginFormData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn">
          Login
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setShowLogin(false)}
        >
          Back to Sign Up
        </button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default LoginForm;