"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";
// Custom icons (replace with your own PNG/SVG icons)
const houseIcon = new L.Icon({
  iconUrl: "/house.png",
  iconSize: [60, 66],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const buildingIcon = new L.Icon({
  iconUrl: "/building.png",
  iconSize: [60, 66],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export default function CustomMap() {
  const mapRef = useRef(null);
  const markers = [
    {
      id: 1,
      position: [48.8566, 2.3522], // Paris
      icon: houseIcon,
      popup: "House in Paris",
    },
    {
      id: 2,
      position: [48.8606, 2.3376], // Louvre
      icon: buildingIcon,
      popup: "Musée du Louvre",
    },
    {
      id: 3,
      position: [48.853, 2.3499], // Another spot
      icon: buildingIcon,
      popup: "Notre Dame",
    },
  ];


  const toggleFullscreen = () => {
    const mapEl = mapRef.current?.getContainer();
    if (!mapEl) return;

    if (!document.fullscreenElement) {
      mapEl.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <>
      <MapContainer
        center={[48.8566, 2.3522]}
        zoom={13}
        style={{ height: "100%", width: "100%", borderRadius: "8px" }}
        zoomControl={false}
        ref={mapRef}
      >
        {/* OpenStreetMap tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Custom markers */}
        {markers.map((m) => (
          <Marker key={m.id} position={m.position} icon={m.icon}>
            <Popup>{m.popup}</Popup>
          </Marker>
        ))}

        {/* Zoom control at bottom-right */}
        <ZoomControl position="bottomright" />
      </MapContainer>
      {/* ✅ Custom fullscreen button */}
      <div
        onClick={toggleFullscreen}
        className="absolute top-[17px] right-[17px] z-[1000] rounded-[12px] p-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out"
      >
        <img src="./Stepper.png" alt="Fullscreen" className="w-[42px] h-[42px]" />
      </div>
    </>
  );
}
