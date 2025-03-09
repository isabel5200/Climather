import { Router } from "express";
import { search } from "../controllers/searchController.js";
import { currentCityWeatherDetails, cityWeatherDetails, hourlyForecastDetails } from "../controllers/weatherController.js";

const api = Router();

// Search city
api.get("/weather/search/:city", search);

// Current city weather details
api.get("/current/details", currentCityWeatherDetails);

// Weather details
api.get("/details/:city", cityWeatherDetails);

// Fprecast per hour
api.get("/forecastPerHour", hourlyForecastDetails);

export default api;
