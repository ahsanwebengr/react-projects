import React, { useState } from 'react';
import LocationSelector from './components/location-selector';
import MapWrapper from './components/map-wrapper';

function App() {
  const [center, setCenter] = useState({
    lat: 25.276987,
    lng: 55.296249,
  });

  return (
    <div className='App'>
      <h1>Google Maps with Location Selector</h1>
      <LocationSelector onLocationChange={setCenter} />
      <MapWrapper center={center} />
    </div>
  );
}

export default App;
