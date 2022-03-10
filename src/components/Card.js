import React from "react";

function Card({ children, loading, responseData }) {
  return (
    <div class="card">
      <h1>Weather App</h1>
      {children}
      <div class={`weather ${loading && "loading"}`}>
        <h2 class="city">Weather in {responseData?.name}</h2>

        <p class="temp">{responseData?.main?.temp}°C</p>
        <div class="flex">
          <img
            src={`https://openweathermap.org/img/wn/${responseData?.weather?.[0]?.icon}.png`}
            alt=""
            class="icon"
          />
          <div class="description">
            {responseData?.weather?.[0]?.description}
          </div>
        </div>
        <div class="humidity">Humidity: {responseData?.main?.humidity}</div>
        <div class="wind">Wind speed: {responseData?.wind?.speed}Km/h</div>
      </div>
    </div>
  );
}

export default Card;
