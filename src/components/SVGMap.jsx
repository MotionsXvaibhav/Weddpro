import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Create a heart-shaped gradient icon
const createHeartIcon = () => {
  const svg = `
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="heartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f72585" />
          <stop offset="100%" stop-color="#720026" />
        </linearGradient>
      </defs>
      <path fill="url(#heartGrad)" stroke="white" stroke-width="1" 
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
          4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 
          16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  `;
  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
};

// Generate 25 random markers
const generateRandomLocations = (count = 25) => {
  const markers = [];
  for (let i = 0; i < count; i++) {
    const lat = 6 + Math.random() * (38 - 6);
    const lon = 68 + Math.random() * (97 - 68);
    markers.push({
      id: i + 1,
      name: `Location ${i + 1}`,
      description: `Beautiful spot #${i + 1} in India.`,
      position: [lat, lon],
    });
  }
  return markers;
};

const locations = generateRandomLocations(25);

const GlobalLeafletStyles = createGlobalStyle`
  .leaflet-container {
    background: transparent !important;
  }
  .leaflet-popup-content-wrapper {
    border-radius: 12px !important;
    box-shadow: 0 8px 20px rgba(247, 37, 133, 0.3);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .leaflet-popup-tip {
    background: #f72585 !important;
  }
`;

const MapPage = styled.div`
  background-color: #bb2200;
  min-height: 100vh;
  padding: 40px 40px 40px 282px;
  box-sizing: border-box;
  width: 100%;
  @media (max-width: 767px) {
    padding-left: 0 !important;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    min-height: auto;
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(247, 37, 133, 0.3);
  position: relative;
  margin-bottom: 0;
  @media (max-width: 768px) {
    height: 400px;
    margin: 0;
    border-radius: 12px;
  }
  @media (max-width: 480px) {
    height: 300px;
    margin: 0;
  }
`;

// New component to handle enabling scroll zoom on click
function ScrollZoomOnClick() {
  const map = useMapEvents({
    click: () => {
      map.scrollWheelZoom.enable();
    },
    mouseleave: () => {
      map.scrollWheelZoom.disable();
    },
  });

  return null;
}

export default function StylishIndiaMap() {
  return (
    <>
      <GlobalLeafletStyles />
      <MapPage>
        <MapWrapper>
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 1000,
              backgroundColor: "#fff",
              padding: "8px 14px",
              borderRadius: 8,
              fontWeight: "600",
              color: "#720026",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              pointerEvents: "none",
            }}
          >
            Click to Interact
          </div>

          <MapContainer
            center={[22.5937, 78.9629]}
            zoom={5}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
            maxBounds={[[6, 68], [38, 97]]}
            maxBoundsViscosity={1.0}
          >
            <ScrollZoomOnClick />
            <TileLayer
  attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
  url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
/>

            {locations.map((loc) => (
              <Marker
                key={loc.id}
                position={loc.position}
                icon={createHeartIcon()}
              >
                <Popup closeButton={true} closeOnClick={false}>
                  <div
                    style={{
                      fontWeight: "700",
                      fontSize: "1.2rem",
                      color: "#720026",
                      marginBottom: 4,
                    }}
                  >
                    {loc.name}
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      color: "#333",
                      marginBottom: 8,
                    }}
                  >
                    {loc.description}
                  </div>
                </Popup>
                <Tooltip direction="top" offset={[0, -24]} opacity={1} permanent>
                  <span style={{ fontWeight: "700", color: "#f72585" }}>
                    {loc.name}
                  </span>
                </Tooltip>
              </Marker>
            ))}
          </MapContainer>
        </MapWrapper>
      </MapPage>
    </>
  );
}
