"use client"

import { useState } from "react"
import "./DonationListings.css"

function DonationListings({ donations: initialDonations }) {
  const [filter, setFilter] = useState("All")
  const [donations, setDonations] = useState(initialDonations)
  const [showForm, setShowForm] = useState(false)
  const [newDonation, setNewDonation] = useState({
    title: "",
    description: "",
    quantity: "",
    expiry: "",
    location: "",
    type: "Vegetables",
    image: "",
  })

  const types = ["All", "Vegetables", "Bakery", "Canned", "Dairy"]

  const filteredDonations =
    filter === "All" ? donations : donations.filter((donation) => donation.type === filter)

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewDonation((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddDonation = () => {
    const newCard = {
      ...newDonation,
      id: Date.now(), // unique ID
    }
    setDonations((prev) => [...prev, newCard])
    setNewDonation({
      title: "",
      description: "",
      quantity: "",
      expiry: "",
      location: "",
      type: "Vegetables",
      image: "",
    })
    setShowForm(false)
  }

  return (
    <section className="section donations-section" id="donations">
      <div className="container">
        <h2 className="section-title">Available Donations</h2>

        <div className="filters">
          {types.map((type) => (
            <button
              key={type}
              className={`filter-btn ${filter === type ? "active" : ""}`}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="donations-grid">
          {filteredDonations.map((donation) => (
            <div className="donation-card card" key={donation.id}>
              <div className="donation-image">
                <img src={donation.image || "/placeholder.svg"} alt={donation.title} />
              </div>
              <div className="donation-content">
                <h3>{donation.title}</h3>
                <p className="donation-description">{donation.description}</p>
                <div className="donation-details">
                  <p><strong>Quantity:</strong> {donation.quantity}</p>
                  <p><strong>Expires:</strong> {donation.expiry}</p>
                  <p><strong>Location:</strong> {donation.location}</p>
                </div>
                <button className="btn">Request Item</button>
              </div>
            </div>
          ))}
        </div>

        <div className="add-donation">
          {!showForm && (
            <button className="btn btn-secondary" onClick={() => setShowForm(true)}>
              Add Donation
            </button>
          )}

          {showForm && (
            <div className="donation-form">
              <input type="text" name="title" placeholder="Title" value={newDonation.title} onChange={handleChange} />
              <input type="text" name="description" placeholder="Description" value={newDonation.description} onChange={handleChange} />
              <input type="text" name="quantity" placeholder="Quantity" value={newDonation.quantity} onChange={handleChange} />
              <input type="text" name="expiry" placeholder="Expiry Date" value={newDonation.expiry} onChange={handleChange} />
              <input type="text" name="location" placeholder="Location" value={newDonation.location} onChange={handleChange} />
              <select name="type" value={newDonation.type} onChange={handleChange}>
                {types.slice(1).map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <input type="text" name="image" placeholder="Image URL (optional)" value={newDonation.image} onChange={handleChange} />
              <div className="form-buttons">
                <button className="btn" onClick={handleAddDonation}>Submit</button>
                <button className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default DonationListings
