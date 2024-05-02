import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  const [fordata, setFordata] = useState(null);
  const [city, setCity] = useState('Mumbai');

  const API_KEY = "3c836f6342424312861201212242304";

  useEffect(() => {
    const fetchData = async () => {

      const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
      const forecast = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=10&aqi=no&alerts=no`;


      try {
        const response = await fetch(url);
        const fort = await fetch(forecast);
        const result = await response.json();
        const fo = await fort.json();
        setData(result);
        setFordata(fo);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Trigger fetchData again with the new city
    fetchData();
  };

  return (
    <div style={{ backgroundColor: "#87CEEB" }}>
      <div style={{ padding: "20px", borderRadius: "10px" }}>
        <header style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1>Weather Forecast</h1>
        </header>
        <section className="current-weather">
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Current Weather</h2>
          <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
            <label htmlFor="cityInput">Enter the City:</label>
            <input
              type="text"
              id="cityInput"
              value={city}
              onChange={handleCityChange}
            />
            <button type="submit">Submit</button>
          </form>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: "bold" }}>
              {data && data.current && (
                <p>{data.current.temp_c}°C / {data.current.temp_f}°F</p>
              )}
            </div>
            <div> {data && data.current && (
              <p>Feels like: {data.current.feelslike_c}°C / {data.current.feelslike_f}°F</p>
            )}
            </div>
            <div style={{ marginBottom: "1px" }}>{data && data.current && (
              <p>Condition: {data.current.condition.text}</p>
            )}</div>
            <div style={{ marginBottom: "1px" }}>{data && data.current && (
              <p>Humidity: {data.current.humidity}%</p>
            )}</div>
          </div>
        </section>
        <section className="weekly-forecast">
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Next 10 Days Forecast</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px", width: "1450px", padding: "10px" }}>
            {fordata && fordata.forecast && fordata.forecast.forecastday.map((day, index) => (
              <div key={index} style={{ padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
                <div>
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>{day.date}</p>
                  <p>Sunrise: {day.astro.sunrise}</p>
                  <p>Sunset: {day.astro.sunset}</p>
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>{day.day.avgtemp_c}°C</p>
                  <p>Condition: {day.day.condition.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <footer style={{ textAlign: "center" }}>
          <p>Powered by Your Weather App</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
