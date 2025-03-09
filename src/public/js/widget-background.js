// Change widget background color based on weather condition
function changeBackgroundColor(condition, isDay) {
    const widget = document.getElementById('details-widget');

    widget.classList.remove('widget-background-default');

    const weatherClasses = {
        Sunny: 'sunny',
        Clear: 'clear',
        'Partly Cloudy': { day: 'partly-cloudy', night: 'partly-cloudy-night' },
        'Partly cloudy': { day: 'partly-cloudy', night: 'partly-cloudy-night' },
        Cloudy: { day: 'cloudy', night: 'cloudy-night' },
        Overcast: { day: 'cloudy', night: 'cloudy-night' },
        Mist: { day: 'fog', night: 'fog-night' },
        'Patchy rain possible': { day: 'moderate-rain', night: 'moderate-rain-night' },
        'Patchy snow possible': { day: 'light-snow', night: 'light-snow-night' },
        'Patchy sleet possible': { day: 'mixed-conditions', night: 'mixed-conditions-night' },
        'Patchy freezing drizzle possible': { day: 'cold-rain', night: 'cold-rain-night' },
        'Thundery outbreaks possible': 'thunderstorms',
        'Blowing snow': { day: 'blizzard', night: 'blizzard-night' },
        'Blizzard': { day: 'blizzard', night: 'blizzard-night' },
        'Fog': { day: 'fog', night: 'fog-night' },
        'Freezing fog': { day: 'fog', night: 'fog-night' },
        'Patchy light drizzle': { day: 'moderate-rain', night: 'moderate-rain-night' },
        'Light drizzle': { day: 'moderate-rain', night: 'moderate-rain-night' },
        'Freezing drizzle': { day: 'cold-rain', night: 'cold-rain-night' },
        'Heavy freezing drizzle': { day: 'cold-rain', night: 'cold-rain-night' },
        'Patchy light rain': { day: 'moderate-rain', night: 'moderate-rain-night' },
        'Light rain': { day: 'moderate-rain', night: 'moderate-rain-night' },
        'Moderate rain at times': { day: 'moderate-rain', night: 'moderate-rain-night' },
        'Moderate rain': { day: 'moderate-rain', night: 'moderate-rain-night' },
        'Heavy rain at times': { day: 'heavy-rain', night: 'heavy-rain-night' },
        'Heavy rain': { day: 'heavy-rain', night: 'heavy-rain-night' },
        'Light freezing rain': { day: 'cold-rain', night: 'cold-rain-night' },
        'Moderate or heavy freezing rain': { day: 'heavy-rain', night: 'heavy-rain-night' },
        'Light sleet': { day: 'mixed-conditions', night: 'mixed-conditions-night' },
        'Moderate or heavy sleet': { day: 'mixed-conditions', night: 'mixed-conditions-night' },
        'Patchy light snow': { day: 'light-snow', night: 'light-snow-night' },
        'Light snow': { day: 'light-snow', night: 'light-snow-night' },
        'Patchy moderate snow': { day: 'light-snow', night: 'light-snow-night' },
        'Moderate snow': { day: 'light-snow', night: 'light-snow-night' },
        'Patchy heavy snow': { day: 'heavy-snow', night: 'heavy-snow-night' },
        'Heavy snow': { day: 'heavy-snow', night: 'heavy-snow-night' },
        'Ice pellets': { day: 'hail', night: 'hail-night' },
        'Light rain shower': { day: 'heavy-rain', night: 'heavy-rain-night' },
        'Moderate or heavy rain shower': { day: 'heavy-rain', night: 'heavy-rain-night' },
        'Torrential rain shower': { day: 'heavy-rain', night: 'heavy-rain-night' },
        'Light sleet showers': { day: 'mixed-conditions', night: 'mixed-conditions-night' },
        'Moderate or heavy sleet showers': { day: 'mixed-conditions', night: 'mixed-conditions-night' },
        'Light snow showers': { day: 'light-snow', night: 'light-snow-night' },
        'Moderate or heavy snow showers': { day: 'heavy-snow', night: 'heavy-snow-night' },
        'Light showers of ice pellets': { day: 'hail', night: 'hail-night' },
        'Moderate or heavy showers of ice pellets': { day: 'hail', night: 'hail-night' },
        'Patchy light rain with thunder': 'thunderstorms',
        'Moderate or heavy rain with thunder': 'thunderstorms',
        'Patchy light snow with thunder': { day: 'snowstorm', night: 'snowstorm-night' },
        'Moderate or heavy snow with thunder': { day: 'snowstorm', night: 'snowstorm-night' }
    };

    let className = weatherClasses[condition];

    if (typeof className === 'object') {
        className = isDay === 0 ? className.day : className.night;
    }

    if (className) {
        widget.classList.add(className);
    }

}