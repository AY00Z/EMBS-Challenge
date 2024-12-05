import React, { useRef, useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import './Map.css';
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = { lng: 13.338414, lat: 52.507932 };
  const [zoom] = useState(12);

  useEffect(() => {
    // Check if map is already initialized
    if (map.current) return;

    // Create map instance
    map.current = L.map(mapContainer.current, {
      center: L.latLng(center.lat, center.lng),
      zoom: zoom,
      attributionControl: false // Optional: removes default attribution
    });

    // Create MapTiler Layer
    try {
      // eslint-disable-next-line no-unused-vars
      const mtLayer = new MaptilerLayer({
        apiKey: "Y4kL9nNNmU8RU2ZNYKmjz",
        style: 'streets', // or another style like 'basic', 'bright', 'pastel'
      }).addTo(map.current);

      // Optional: Add some console logs for debugging
      console.log('Map initialized successfully');
    } catch (error) {
      console.error('Error initializing MapTiler layer:', error);
    }

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [center.lng, center.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default Map;