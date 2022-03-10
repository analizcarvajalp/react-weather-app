import React, { useState } from "react";

const WeatherContext = React.createContext();

function Weather(props) {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState("");
  function getWeather(e) {
    console.log(process.env.REACT_APP_WEATHERAPP_API_KEY);
    e.preventDefault();
    if (city.length === 0) {
      alert("insert city");
      setLoading(true);
    } else {
      setResponseData({});

      let uri = encodeURIComponent(city);

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${uri}&units=metric&appid=${process.env.REACT_APP_WEATHERAPP_API_KEY}`
      )
        .then((res) => {
          if (res.ok) {
            setLoading(false);
            return res.json();
          } else {
            if (res.status === 404) {
              alert("insert a real city");
              setLoading(true);
            }
          }
        })

        .then((res) => setResponseData(res));
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        setLoading,
        getWeather,
        responseData,
        setResponseData,
        city,
        setCity,
        loading,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, Weather };
