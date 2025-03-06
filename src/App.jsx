"use client"
import Header from "./components/Header"
import Hero from "./components/Hero"
import DonationListings from "./components/DonationListings"
import Map from "./components/Map"
import VolunteerForm from "./components/VolunteerForm"
import AwarenessSection from "./components/AwarenessSection"
import Footer from "./components/Footer"
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
  // Add more donations as needed
]

const locations = [
  { id: 1, name: "Downtown Food Bank", lat: 40.7128, lng: -74.006, type: "Food Bank" },
  { id: 2, name: "Sunshine Bakery", lat: 40.7148, lng: -74.013, type: "Donor" },
  { id: 3, name: "Community Pantry", lat: 40.7118, lng: -74.009, type: "Pantry" },
  { id: 4, name: "Green Grocery", lat: 40.7138, lng: -74.003, type: "Donor" },
]

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <DonationListings donations={donations} />
      <Map locations={locations} />
      <VolunteerForm />
      <AwarenessSection />
      <Footer />
    </div>
  )
}

export default App

