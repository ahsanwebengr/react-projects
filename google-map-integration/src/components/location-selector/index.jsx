import React, { useEffect, useState } from 'react';
import { Country, State, City } from 'country-state-city';

function LocationSelector({ onLocationChange }) {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const countries = Country.getAllCountries();

  useEffect(() => {
    if (selectedCountry) {
      setStates(State.getStatesOfCountry(selectedCountry));
      setSelectedState('');
      setCities([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      setCities(City.getCitiesOfState(selectedCountry, selectedState));
      setSelectedCity('');
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedCity) {
      const city = cities.find(c => c.name === selectedCity);
      if (city) {
        const fullAddress = `${city.name}, ${city.stateCode}, ${city.countryCode}`;
        console.log('🚀 ~ useEffect ~ fullAddress:', fullAddress);
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            fullAddress
          )}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
        )
          .then(res => res.json())
          .then(data => {
            const location = data.results[0]?.geometry?.location;
            if (location) {
              onLocationChange({
                lat: location.lat,
                lng: location.lng,
              });
            }
          })
          .catch(err => console.error('Geocoding failed', err));
      }
    }
  }, [selectedCity]);

  return (
    <div className='flex gap-2 mb-4'>
      <select value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)}>
        <option value=''>Select Country</option>
        {countries.map(country => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>

      <select
        value={selectedState}
        onChange={e => setSelectedState(e.target.value)}
        disabled={!selectedCountry}
      >
        <option value=''>Select State</option>
        {states.map(state => (
          <option key={state.isoCode} value={state.isoCode}>
            {state.name}
          </option>
        ))}
      </select>

      <select
        value={selectedCity}
        onChange={e => setSelectedCity(e.target.value)}
        disabled={!selectedState}
      >
        <option value=''>Select City</option>
        {cities.map(city => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LocationSelector;
