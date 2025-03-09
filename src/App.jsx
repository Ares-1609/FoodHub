"use client"
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import DonationListings from "./components/DonationListings"
import Map from "./components/Map"
import VolunteerForm from "./components/VolunteerForm"
import AwarenessSection from "./components/AwarenessSection"
import Footer from "./components/Footer"
import VolunteerPage from "./VolunteerPage"
import "./App.css"

// Sample data
const donations = [
  {
    id: 1,
    title: "Fresh Produce",
    description: "Assorted vegetables and fruits from our local market",
    quantity: "15 kg",
    expiry: "2024-03-15",
    location: "Downtown Market",
    type: "Vegetables",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Bread and Pastries",
    description: "Day-old bread, muffins, and pastries",
    quantity: "25 items",
    expiry: "2024-03-12",
    location: "Sunshine Bakery",
    type: "Bakery",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Canned Beans",
    description: "Canned beans, ready to eat",
    quantity: "30 cans",
    expiry: "2025-01-01",
    location: "Community Pantry",
    type: "Canned",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Milk and Cheese",
    description: "Fresh milk and assorted cheeses",
    quantity: "10 liters of milk, 5 kg of cheese",
    expiry: "2024-03-10",
    location: "Green Grocery",
    type: "Dairy",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Tomatoes and Cucumbers",
    description: "Fresh tomatoes and cucumbers",
    quantity: "20 kg",
    expiry: "2024-03-20",
    location: "Downtown Market",
    type: "Vegetables",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Assorted Breads",
    description: "Freshly baked assorted breads",
    quantity: "30 items",
    expiry: "2024-03-14",
    location: "Sunshine Bakery",
    type: "Bakery",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    title: "Canned Soup",
    description: "Assorted canned soups",
    quantity: "40 cans",
    expiry: "2025-02-01",
    location: "Community Pantry",
    type: "Canned",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    title: "Yogurt and Butter",
    description: "Fresh yogurt and butter",
    quantity: "15 kg",
    expiry: "2024-03-11",
    location: "Green Grocery",
    type: "Dairy",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const locations = [
  { id: 1, name: "Downtown Food Bank", lat: 40.7128, lng: -74.006, type: "Food Bank" },
  { id: 2, name: "Sunshine Bakery", lat: 40.7148, lng: -74.013, type: "Donor" },
  { id: 3, name: "Community Pantry", lat: 40.7118, lng: -74.009, type: "Pantry" },
  { id: 4, name: "Green Grocery", lat: 40.7138, lng: -74.003, type: "Donor" },
]

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={
            <>
              <Header />
              <Hero />
              <DonationListings donations={donations} />
              <Map locations={locations} />
              <AwarenessSection />
              <Footer />
            </>
          } />
          <Route path="/volunteer" element={<VolunteerPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App