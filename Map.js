import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ address }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (address) {
      // Convert address to latitude and longitude (using Geocoding API or similar)
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=YOUR_GOOGLE_MAPS_API_KEY`)
        .then(response => response.json())
        .then(data => {
          const location = data.results[0].geometry.location;
          setLocation(location);
        })
        .catch(error => console.error("Error fetching location:", error));
    }
  }, [address]);

  if (!location) return <div>Loading map...</div>;

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={location}
        zoom={10}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
