import "./App.css";
import React, { useContext } from "react";
import Card from "../components/Card.js";
import Search from "../components/Search.js";
import { WeatherContext } from "../components/WeatherContext";
function AppUI() {
  const {
    setLoading,
    getWeather,
    responseData,
    setResponseData,
    city,
    setCity,
    loading,
  } = useContext(WeatherContext);

  return (
    <>
      <Card responseData={responseData} loading={loading}>
        <Search
          setLoading={setLoading}
          getWeather={getWeather}
          responseData={responseData}
          setResponseData={setResponseData}
          city={city}
          setCity={setCity}
        />
      </Card>
    </>
  );
}

export default AppUI;
