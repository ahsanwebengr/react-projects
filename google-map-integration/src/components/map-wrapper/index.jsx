import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '100%',
  height: '400px',
};

function MapWrapper({ center }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      <Marker position={center} />
    </GoogleMap>
  );
}

export default React.memo(MapWrapper);
