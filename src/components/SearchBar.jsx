import { useState } from "react";
import { hasWeatherApiKey } from "../config";

function SearchBar() {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      console.log("Searching for:", city);
      console.log(
        hasWeatherApiKey
          ? "Weather API key loaded from .env"
          : "Warning: VITE_WEATHER_API_KEY missing in .env"
      );
    }
  };

  // The key is available project-wide via WEATHER_API_KEY for API calls.
  // Avoid logging the raw key in the browser console.
  if (!hasWeatherApiKey) {
    console.warn("Weather API key is missing. Add VITE_WEATHER_API_KEY to .env");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group input-group-lg shadow-sm">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="btn btn-primary px-4">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;