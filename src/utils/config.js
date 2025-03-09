import dotenv from "dotenv";

dotenv.config();

// Config object to store the API key
export const config = {
    weatherApiKey: process.env.API_KEY,
}
