import React from "react";

function Card({ children, loading, responseData }) {
  return (
    <div className="card">
      <h1>Weather App</h1>
      {children}
      <div className={`weather ${loading && "loading"}`}>
        <h2 className="city">Weather in {responseData?.name}</h2>

        <p className="temp">{responseData?.main?.temp}°C</p>
        <div className="flex">
          <img
            src={`https://openweathermap.org/img/wn/${responseData?.weather?.[0]?.icon}.png`}
            alt=""
            className="icon"
          />
          <div className="description">
            {responseData?.weather?.[0]?.description}
          </div>
        </div>
        <div className="humidity">Humidity: {responseData?.main?.humidity}</div>
        <div className="wind">Wind speed: {responseData?.wind?.speed}Km/h</div>
      </div>
    </div>
  );
}

export default Card;
