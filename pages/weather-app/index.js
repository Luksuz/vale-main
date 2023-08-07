import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');


  const fetchWeatherData = async () => {
    try {
      const coordinatesResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city ? city : 'london'}&limit=5&appid=e8566ef6e0c25c6e3a98acfe4243611c`
      );
      const location = await coordinatesResponse.json();

      if (location.length > 0) {
        const temperaturesResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location[0]?.lat}&lon=${location[0]?.lon}&appid=e8566ef6e0c25c6e3a98acfe4243611c`
        );
        const data = await temperaturesResponse.json();
        setWeatherData(data);
      }
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
    console.log(weatherData);
  };

  function formatDateTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }

  return (
    <div className='row align-items-center justify-content-center py-5'>
        <div className="d-flex flex-column col-6 border border-2 rounded-5 py-4">
        <FloatingLabel
            value={city}
            controlId="floatingInput"
            label="City"
            className="mb-3"
            onChange={(e) => setCity(e.target.value)}
        >
            <Form.Control type="email" placeholder="City" />
        </FloatingLabel>
        {weatherData && weatherData.sys && (
            <div className='text-start'>
            <h2 className="">
                {weatherData.name}, {weatherData.sys.country}
            </h2>
            <h2 className="">
            {(weatherData.main.temp - 273.15).toFixed(1)}°C
            </h2>
            <h3 className="">
                Last Update: {formatDateTime(weatherData.dt)}
            </h3>
            </div>
        )}
            <Button variant="primary" onClick={() => fetchWeatherData()}>Search</Button>{' '}
        </div>
    </div>

  );
}

export default function App() {
  return (
    <div className="">
      <Weather />
    </div>
  );
}