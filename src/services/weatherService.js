import { config } from "../utils/config.js";
import { formatDate, formatDay, formatHour, formatDayWithNumber } from "../utils/formatDate.js";

// Weather details for current city and searched city
export const weatherDetails = async (query) => {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${config.weatherApiKey}&q=${query}&aqi=yes`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok)
            throw new Error("An error occurred while searching city info");

        const data = await response.json();
        const localTime = new Date(data.location.localtime);
        const formattedDate = formatDate(localTime);

        return { location: data.location, current: data.current, formattedDate };
    } catch (error) {
        console.error("Error: ", error);

        return { error: "An error occurred while searching city info" };
    }
};

// Ten days forecast
export const tenDaysForecast = async (query) => {
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${config.weatherApiKey}&q=${query}&days=3&aqi=yes&alerts=yes`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok)
            throw new Error("An error occurred while searching city info");

        const data = await response.json();
        const forecast = data.forecast.forecastday;

        const forecastWithDays = forecast.map((day, index) => {
            const dayName = formatDay(day.date);

            return {
                lat: data.location.lat,
                lon: data.location.lon,
                dayNumber: index,
                dayOfWeek: index === 0 ? "Today" : dayName,
                conditionText: day.day.condition.text,
                conditionIcon: day.day.condition.icon,
                maxtemp_c: day.day.maxtemp_c,
                maxtemp_f: day.day.maxtemp_f,
                mintemp_c: day.day.mintemp_c,
                mintemp_f: day.day.mintemp_f,
                maxwind_kph: day.day.maxwind_kph,
                totalprecip_in: day.day.totalprecip_in,
                avghumidity: day.day.avghumidity,
                sunrise: day.astro.sunrise,
                sunset: day.astro.sunset,
                moonrise: day.astro.moonrise,
                moonset: day.astro.moonset,
                moon_phase: day.astro.moon_phase,
                moon_illumination: day.astro.moon_illumination,
                uv: day.day.uv
            };
        });

        return { forecast: forecastWithDays };
    } catch (error) {
        console.error("Error: ", error);

        return { error: "An error occurred while searching city info" };
    }
};

// Hourly forecast
export const hourlyForecast = async (query, index) => {
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${config.weatherApiKey}&q=${query}&days=3&aqi=no&alerts=no`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok)
            throw new Error("An error occurred while searching city info");

        const data = await response.json();
        const todayForecast = data.forecast.forecastday[0];
        const forecast = data.forecast.forecastday;
        const day = forecast[index].date;
        const formattedDay = formatDayWithNumber(day);

        const todayWeather = {
            sunrise: todayForecast.astro.sunrise,
            sunset: todayForecast.astro.sunset,
            moonrise: todayForecast.astro.moonrise,
            moonset: todayForecast.astro.moonset,
            maxtemp_c: todayForecast.day.maxtemp_c,
            maxtemp_f: todayForecast.day.maxtemp_f,
            mintemp_c: todayForecast.day.mintemp_c,
            mintemp_f: todayForecast.day.mintemp_f,
            avgtemp_c: todayForecast.day.avgtemp_c,
            avgtemp_f: todayForecast.day.avgtemp_f,
            totalprecip_mm: todayForecast.day.totalprecip_mm,
            maxwind_kph: todayForecast.day.maxwind_kph,
        };

        const forecastWithHours = forecast[index].hour.filter((_, i) => i % 3 === 0).map((hour) => {
            const formattedTime = formatHour(hour.time);

            return {
                time: formattedTime,
                conditionText: hour.condition.text,
                conditionIcon: hour.condition.icon,
                temp_c: hour.temp_c,
                temp_f: hour.temp_f,
                feelslike_c: hour.feelslike_c,
                feelslike_f: hour.feelslike_f,
                wind_kph: hour.wind_kph,
                wind_dir: hour.wind_dir,
                gust_kph: hour.gust_kph,
                precip_mm: hour.precip_mm,
                cloud: hour.cloud,
                humidity: hour.humidity,
                pressure_mb: hour.pressure_mb,
            };
        });

        return { formattedDay, todayForecast: todayWeather, HourForecast: forecastWithHours };
    } catch (error) {
        console.error("Error: ", error);

        return { error: "An error occurred while searching city info" };
    }
};