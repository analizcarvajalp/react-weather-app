import React from "react";

import AppUI from "./AppUI";
import { Weather } from "../components/WeatherContext";

function App() {
  return (
    <Weather>
      <AppUI />
    </Weather>
  );
}

export default App;
