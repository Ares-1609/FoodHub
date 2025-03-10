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
import SupportUs from "./SupportUs"
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
    image: "https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg",
  },
  {
    id: 2,
    title: "Bread and Pastries",
    description: "Day-old bread, muffins, and pastries",
    quantity: "25 items",
    expiry: "2024-03-12",
    location: "Sunshine Bakery",
    type: "Bakery",
    image: "https://breadandcie.com/wp-content/uploads/2021/07/Assorted-Croissant-2-gourmet-bread-and-cie-1920.jpg",
  },
  {
    id: 3,
    title: "Canned Beans",
    description: "Canned beans, ready to eat",
    quantity: "30 cans",
    expiry: "2025-01-01",
    location: "Community Pantry",
    type: "Canned",
    image: "https://www.foodrepublic.com/img/gallery/13-simple-ingredients-that-take-canned-beans-from-boring-to-brilliant/l-intro-1704221981.jpg",
  },
  {
    id: 4,
    title: "Milk and Cheese",
    description: "Fresh milk and assorted cheeses",
    quantity: "10 liters of milk, 5 kg of cheese",
    expiry: "2024-03-10",
    location: "Green Grocery",
    type: "Dairy",
    image: "https://m.economictimes.com/thumb/msid-66601972,width-1200,height-900,resizemode-4,imgsize-578438/milk-and-cheese.jpg",
  },
  {
    id: 5,
    title: "Tomatoes and Cucumbers",
    description: "Fresh tomatoes and cucumbers",
    quantity: "20 kg",
    expiry: "2024-03-20",
    location: "Downtown Market",
    type: "Vegetables",
    image: "https://www.homemadeinterest.com/wp-content/uploads/2022/05/Tomato-Cucumber-Salad_2022_IG-2-1.jpg",
  },
  {
    id: 6,
    title: "Assorted Breads",
    description: "Freshly baked assorted breads",
    quantity: "30 items",
    expiry: "2024-03-14",
    location: "Sunshine Bakery",
    type: "Bakery",
    image: "https://img.freepik.com/premium-photo/breads-assorted-types-brazilian-breads-bakery-products_491130-2706.jpg",
  },
  {
    id: 7,
    title: "Canned Soup",
    description: "Assorted canned soups",
    quantity: "40 cans",
    expiry: "2025-02-01",
    location: "Community Pantry",
    type: "Canned",
    image: "https://www.allrecipes.com/thmb/iOFPQXgs7htNg1yXWSfaKGy1nq8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-canned-Chicken-Noodle-Soup-taste-test-campbells-chunky-e57de7273c1b490dbdd461b854c5182e.jpg",
  },
  {
    id: 8,
    title: "Yogurt and Butter",
    description: "Fresh yogurt and butter",
    quantity: "15 kg",
    expiry: "2024-03-11",
    location: "Green Grocery",
    type: "Dairy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzARbPG-F5FycpJv4HL--_0rnFShAGrSIcw&s",
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
          <Route path="/supportus" element={<SupportUs />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App