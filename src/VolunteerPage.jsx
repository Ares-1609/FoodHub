"use client"

import VolunteerForm from "./components/VolunteerForm"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./VolunteerPage.css"

function VolunteerPage() {
  return (
    <div className="volunteer-page">
      <Header />
      <div className="volunteer-content">
        <h1>Join Us as a Volunteer</h1>
        <p>We are excited to have you on board. Please fill out the form below to get started.</p>
        <VolunteerForm />
      </div>
      <Footer />
    </div>
  )
}

export default VolunteerPage