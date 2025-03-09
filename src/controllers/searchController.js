import { searchCity } from "../services/searchService.js";

// Search city controller
export const search = async (req, res) => {
  try {
    const city = req.params.city;
    const cityData = await searchCity(city);

    res.json(cityData);
  } catch (error) {
    console.error("Error: ", error);
    res
      .status(500)
      .json({ error: "An error occurred while searching for cities" });
  }
};


