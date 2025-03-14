"use client"

import { useEffect, useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import "leaflet-routing-machine"
import "./Map.css"

// Function to get marker icon based on location type
const getMarkerIcon = (type) => {
  switch (type) {
    case "Food Bank":
      return new L.Icon({
        iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })
    case "Donor":
      return new L.Icon({
        iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })
    case "Pantry":
      return new L.Icon({
        iconUrl: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })
    default:
      return new L.Icon({
        iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })
  }
}

const RoutingControl = ({ start, end }) => {
  const map = useMap()

  useEffect(() => {
    if (!map) return

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(start.lat, start.lng), L.latLng(end.lat, end.lng)],
      routeWhileDragging: true,
    }).addTo(map)

    return () => map.removeControl(routingControl)
  }, [map, start, end])

  return null
}

function Map() {
  const mapRef = useRef(null)

  const locations = [
    {
      id: 1,
      name: "FoodBank (1)",
      type: "Food Bank",
      lat: 12.953847,
      lng: 80.209000,
    },
    {
      id: 2,
      name: "FoodBank (2)",
      type: "Food Bank",
      lat: 13.041231,
      lng: 80.233705,
    },
    {
      id: 3,
      name: "FoodBank (3)",
      type: "Food Bank",
      lat: 12.899600,
      lng: 80.081400,
    },
    {
      id: 4,
      name: "FoodBank (4)",
      type: "Food Bank",
      lat: 13.119200,
      lng: 80.218600,
    },
  ]

  const avgLat = locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length
  const avgLng = locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length

  const handleMarkerClick = (location) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`
    window.open(googleMapsUrl, "_blank")
  }

  return (
    <section className="section map-section" id="map">
      <div className="container">
        <h2 className="section-title">Find Donation Points</h2>
        <div className="map-container">
          <MapContainer
            center={[avgLat, avgLng]}
            zoom={13}
            style={{ height: "500px", width: "100%" }}
            ref={mapRef}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={[location.lat, location.lng]}
                icon={getMarkerIcon(location.type)}
                eventHandlers={{
                  click: () => handleMarkerClick(location),
                }}
              >
                <Popup>
                  <div className="info-window">
                    <h3>{location.name}</h3>
                    <p>Type: {location.type}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          {/* <div className="map-legend">
            <div className="legend-item">
              <span className="legend-marker donor"></span>
              <span>Donors</span>
            </div>
            <div className="legend-item">
              <span className="legend-marker food-bank"></span>
              <span>Food Banks</span>
            </div>
            <div className="legend-item">
              <span className="legend-marker pantry"></span>
              <span>Community Pantries</span>
            </div>
          </div> */}
        </div>
        {/* <div className="map-fallback">
          <p>
            For demonstration purposes, this is a map placeholder. In a real application, you would need to add your
            Google Maps API key.
          </p>
          <p>Available locations:</p>
          <ul>
            {locations.map((location) => (
              <li key={location.id}>
                <strong>{location.name}</strong> - {location.type}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </section>
  )
}

export default Map