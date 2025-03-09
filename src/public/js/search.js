// Variables
const searchInput = document.getElementById('search-input');
const autoCompleteResults = document.getElementById('autocomplete-results');
let currentQueryId = 0;

// Functions

// Save the city to local storage
function saveToLocalStorage(city) {
  const savedCities = JSON.parse(localStorage.getItem('recentCities')) || [];

  if (!savedCities.some(savedCity => savedCity.url === city.url)) {
    savedCities.push(city);

    if (savedCities.length > 20) {
      savedCities.shift();
    }

    localStorage.setItem('recentCities', JSON.stringify(savedCities));
  }
}

// Display the recent cities 
function displayRecentCities() {
  const savedCities = JSON.parse(localStorage.getItem('recentCities')) || [];
  const recentSearchesContainer = document.getElementById('recent-searches');

  if (!recentSearchesContainer) return;

  recentSearchesContainer.innerHTML = '';

  if (savedCities.length === 0) {
    recentSearchesContainer.innerHTML = `
    <li class="list-group-item text-center">No recent searches yet.</li>
  `;

    return;
  }

  savedCities.forEach((city) => {
    const cityElement = document.createElement('li');

    cityElement.className = 'list-group-item d-flex justify-content-between align-items-center';
    cityElement.innerHTML = `
    <a href="/details/${city.url}?loc=${city.id}" 
       class="text-decoration-none text-dark link-primary">
        ${city.name}, ${city.region}, ${city.country}
    </a>
    <i class="bi bi-search"></i>
`;

    recentSearchesContainer.appendChild(cityElement);
  });
}

// Event Listeners

// Event listener for the search input to get the current location
searchInput.addEventListener('focus', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      autoCompleteResults.innerHTML = `
        <a href="/current/details?lat=${latitude}&lon=${longitude}" id="use-current-location" class="list-group-item list-group-item-action">
        Use current location
        <i class="bi bi-cursor-fill"></i>
        </a>
      `;
    },
      (error) => {
        console.error("Error obtaining location: ", error);

        autoCompleteResults.innerHTML = `
          <p class="text-danger mt-2">Unable to access your location. Please enable location services.</p>
        `;
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");

    autoCompleteResults.innerHTML = `
      <p class="text-danger mt-2">Geolocation is not supported by this browser.</p>
      `;
  }

  return;
});

// Event listener for the search input to get the search results
searchInput.addEventListener("input", async () => {
  const query = searchInput.value.trim();
  const queryId = ++currentQueryId;

  try {
    const response = await fetch(`/weather/search/${query}`);

    if (!response.ok) {
      throw new Error("An error occurred while searching for cities");
    }

    const cities = await response.json();

    if (queryId === currentQueryId) {
      autoCompleteResults.innerHTML = cities
        .map(
          (city) => `
                    <a href="#" 
                       class="list-group-item list-group-item-action" 
                       data-city='${JSON.stringify(city)}'>
                        ${city.name}, ${city.region}, ${city.country}
                    </a>
                `
        )
        .join('');
    }

    autoCompleteResults.querySelectorAll('a').forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();

        const city = JSON.parse(item.getAttribute('data-city'));

        saveToLocalStorage(city);
        window.location.href = `/details/${city.url}?loc=${city.id}`;
      });
    });
  } catch (error) {
    console.error("Error: ", error);

    if (queryId === currentQueryId) {
      autoCompleteResults.innerHTML = `
                <p class="text-danger mt-2">Error loading suggestions. No city found with that name.</p>
            `;
    }
  }
});

document.addEventListener('DOMContentLoaded', displayRecentCities);


