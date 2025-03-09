import { config } from "../utils/config.js";

// Search city service
export const searchCity = async (city) => {
    const apiUrl = `https://api.weatherapi.com/v1/search.json?key=${config.weatherApiKey}&q=${city}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok)
            throw new Error("An error occurred while searching for cities");

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error: ", error);
        res
            .status(500)
            .json({ error: "An error occurred while searching for cities" });
    }
};