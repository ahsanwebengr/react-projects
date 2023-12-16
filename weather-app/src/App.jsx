import './App.css';
import { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const App = () => {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getWeather = async () => {
    if (city.length >= 3) {
      setIsLoading(true);

      const api = 'e70dc91147229afe0de872d563a84bf9';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        let MT = Math.round(data.main.temp);
        let FL = Math.round(data.main.feels_like);

        const weather = {
          location: `${data.name}`,
          temperature: `Temperature : ${MT} C`,
          feelsLike: `Feels Like : ${FL} C`,
          humidity: `Humidity : ${data.main.humidity} %`,
          wind: `Wind : ${data.wind.speed} km/h`,
          condition: `Weather Condition ${data.weather[0].description}`
        };

        setWeatherInfo(weather);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setIsLoading(false);
        setCity('');
      }
    }
  };


  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className='container'>
      <div className="search-input">
        <input type="text" placeholder='Search City' value={city} onChange={(e) => setCity(e.target.value)} />
        <button onClick={getWeather} className='search-btn'>
          {isLoading ? <AiOutlineLoading3Quarters size={'22px'} className='rotate' /> : <IoIosSearch size={'22px'} />}
        </button>
      </div>
      <div className="weather-details">
        {weatherInfo ? <>
          <h2 className='location'>Weather in <span className='location-city'>{weatherInfo.location}</span>  </h2>
          <p>{weatherInfo.temperature}</p>
          <p>{weatherInfo.feelsLike}</p>
          <p>{weatherInfo.humidity}</p>
          <p>{weatherInfo.wind}</p>
          <p>{weatherInfo.condition}</p>
        </>:
        <h6 className='no-result'>No Result Found..</h6>
        }
      </div>

    </div>
  );
};

export default App;