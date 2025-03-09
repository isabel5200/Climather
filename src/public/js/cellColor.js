// Change cell color based on value
function applyColor(selector, getColor) {
    document.querySelectorAll(selector).forEach(td => {
        const value = parseFloat(td.textContent);

        if (!isNaN(value)) {
            td.style.backgroundColor = getColor(value);
            td.style.color = "#fff";
        }
    });
}

// Fahrenheit
applyColor(".temp-f", temp => {
    if (temp <= 32) return "#007BFF";
    if (temp > 32 && temp <= 59) return "#00BFFF";
    if (temp > 59 && temp <= 77) return "#28A745";
    if (temp > 77 && temp <= 86) return "#FFA500";
    if (temp > 86) return "#DC3545";

    return "#5cb85c";
});

// Celsius
applyColor(".temp-c", temp => {
    if (temp <= 0) return "#007BFF";
    if (temp > 0 && temp <= 15) return "#00BFFF";
    if (temp > 15 && temp <= 25) return "#28A745";
    if (temp > 25 && temp <= 30) return "#FFA500";
    if (temp > 30) return "#DC3545";

    return "#5cb85c";
});

// Wind
applyColor(".wind", wind => {
    if (wind > 50) return "#d9534f";
    if (wind > 30) return "#f0ad4e";

    return "#5bc0de";
});

// Precipitation
applyColor(".precip", precip => {
    if (precip > 50) return "#4f83d9";
    if (precip > 20) return "#5bc0de";
    if (precip > 5) return "#f0ad4e";

    return "#5cb85c";
});

// Gust
applyColor(".gust", gust => {
    if (gust >= 0 && gust < 11) return "#4CAF50";
    if (gust >= 11 && gust <= 30) return "#FFC107";
    if (gust >= 31 && gust <= 50) return "#FF9800";
    if (gust >= 51 && gust <= 70) return "#F44336";
    if (gust >= 71) return "#9C27B0";
});

// Pressure
applyColor(".pressure", pressure => {
    if (pressure < 980) return "#673AB7";
    if (pressure >= 980 && pressure <= 1000) return "#E91E63";
    if (pressure >= 1001 && pressure <= 1015) return "#FFEB3B";
    if (pressure >= 1016 && pressure <= 1030) return "#4CAF50";
    if (pressure > 1030) return "#2196F3";
});

document.addEventListener('DOMContentLoaded', applyColor);