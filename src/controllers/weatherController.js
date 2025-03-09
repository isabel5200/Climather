import { weatherDetails, tenDaysForecast, hourlyForecast } from "../services/weatherService.js";

// Current city weather details (current location)
export const currentCityWeatherDetails = async (req, res) => {
    try {
        const { lat, lon } = req.query;
        const weatherData = await weatherDetails(`${lat},${lon}`);
        const tenDaysForecastData = await tenDaysForecast(`${lat},${lon}`);

        res.render("details", { title: `Weather details`, ...weatherData, ...tenDaysForecastData });
    } catch (error) {
        console.error("Error: ", error);

        res
            .status(500)
            .json({ error: "An error occurred while searching city info" });
    }
};

// City weather details (searched city)
export const cityWeatherDetails = async (req, res) => {
    try {
        const { loc } = req.query;
        const weatherData = await weatherDetails(`id:${loc}`);
        const tenDaysForecastData = await tenDaysForecast(`id:${loc}`);

        res.render("details", { title: `Weather details`, ...weatherData, ...tenDaysForecastData });
    } catch (error) {
        console.error("Error: ", error);

        res
            .status(500)
            .json({ error: "An error occurred while searching city info" });
    }
};

// Hourly forecast details
export const hourlyForecastDetails = async (req, res) => {
    try {
        const { lat, lon, day } = req.query;
        const hourlyForecastData = await hourlyForecast(`${lat},${lon}`, day);

        res.render("hourly", { title: `Hourly forecast`, ...hourlyForecastData });
    } catch (error) {
        console.error("Error: ", error);

        res
            .status(500)
            .json({ error: "An error occurred while searching city info" });
    }
};
