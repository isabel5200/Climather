// Normalize condition string to match the group name in the JSON file
function normalizeCondition(condition) {
    return condition.toLowerCase().replace(/\s+/g, '_');
}

// Load particles.js config based on the weather condition
function loadParticles(condition) {
    const conditionToGroupMap = {
        sunny: '1_sunny',
        clear: '1_clear',
        partly_cloudy: '2_partly_cloudy',
        cloudy: '3_cloudy',
        overcast: '3_cloudy',
        mist: '7_fog',
        patchy_rain_possible: '4_moderate_rain',
        patchy_snow_possible: '9_light_snow',
        patchy_sleet_possible: '13_mixed_conditions',
        patchy_freezing_drizzle_possible: '8_cold_rain',
        thundery_outbreaks_possible: '6_thunder_rain',
        blowing_snow: '11_blizzard',
        blizzard: '11_blizzard',
        fog: '7_fog',
        freezing_fog: '7_fog',
        patchy_light_drizzle: '4_moderate_rain',
        light_drizzle: '4_moderate_rain',
        freezing_drizzle: '8_cold_rain',
        heavy_freezing_drizzle: '8_cold_rain',
        patchy_light_rain: '4_moderate_rain',
        light_rain: '4_moderate_rain',
        moderate_rain_at_times: '4_moderate_rain',
        moderate_rain: '4_moderate_rain',
        heavy_rain_at_times: '5_heavy_rain',
        heavy_rain: '5_heavy_rain',
        light_freezing_rain: '8_cold_rain',
        moderate_or_heavy_freezing_rain: '5_heavy_rain',
        light_sleet: '13_mixed_conditions',
        moderate_or_heavy_sleet: '13_mixed_conditions',
        patchy_light_snow: '9_light_snow',
        light_snow: '9_light_snow',
        patchy_moderate_snow: '9_light_snow',
        moderate_snow: '9_light_snow',
        patchy_heavy_snow: '10_heavy_snow',
        heavy_snow: '10_heavy_snow',
        ice_pellets: '12_hail',
        light_rain_shower: '5_heavy_rain',
        moderate_or_heavy_rain_shower: '5_heavy_rain',
        torrential_rain_shower: '5_heavy_rain',
        light_sleet_showers: '13_mixed_conditions',
        moderate_or_heavy_sleet_showers: '13_mixed_conditions',
        light_snow_showers: '9_light_snow',
        moderate_or_heavy_snow_showers: '10_heavy_snow',
        light_showers_of_ice_pellets: '12_hail',
        moderate_or_heavy_showers_of_ice_pellets: '12_hail',
        patchy_light_rain_with_thunder: '6_thunder_rain',
        moderate_or_heavy_rain_with_thunder: '6_thunder_rain',
        patchy_light_snow_with_thunder: '14_snowstorm',
        moderate_or_heavy_snow_with_thunder: '14_snowstorm'
    };
    const normalizedCondition = normalizeCondition(condition);
    const group = conditionToGroupMap[normalizedCondition] || 'default';
    const jsonPath = `/json/${group}.json`;

    // Load particles.js config
    particlesJS.load('particles-js', jsonPath, function () {
        // console.log(`Particles.js config loaded for condition: ${condition} (group: ${group})`);
    });
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', '/json/test.json', function () {
//     console.log('callback - particles.js config loaded');
// });