"use client"

import { useState } from "react"
import "./DonationListings.css"

function DonationListings({ donations }) {
  const [filter, setFilter] = useState("All")

  const types = ["All", "Vegetables", "Bakery", "Canned", "Dairy"]

  const filteredDonations = filter === "All" ? donations : donations.filter((donation) => donation.type === filter)

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
                  <p>
                    <strong>Quantity:</strong> {donation.quantity}
                  </p>
                  <p>
                    <strong>Expires:</strong> {donation.expiry}
                  </p>
                  <p>
                    <strong>Location:</strong> {donation.location}
                  </p>
                </div>
                <button className="btn">Request Item</button>
              </div>
            </div>
          ))}
        </div>

        <div className="add-donation">
          <button className="btn btn-secondary">Add Donation</button>
        </div>
      </div>
    </section>
  )
}

export default DonationListings