// Format date to be displayed in the weather widget
export const formatDate = (date) => {
    const localTime = new Date(date);
    const weekday = localTime.toLocaleString('en-US', { weekday: 'long' });
    const month = localTime.toLocaleString('en-US', { month: 'long' });
    const day = localTime.getDate();
    const year = localTime.getFullYear();
    const time = localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    return `${weekday} ${month} ${day} ${year} ${time}`;
};

// Format day name to be displayed in the 3-day forecast table
export const formatDay = (date) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const localDate = new Date(date + "T00:00:00Z");
    const dayName = daysOfWeek[localDate.getUTCDay()];

    return dayName;
}

// Format day name with number to be displayed in the hourly forecast table title
export const formatDayWithNumber = (date) => {
    const parts = date.split('-');
    const localTime = new Date(parts[0], parts[1] - 1, parts[2]);
    const weekday = localTime.toLocaleString('en-US', { weekday: 'long' });
    const month = localTime.toLocaleString('en-US', { month: "long" });
    const day = localTime.getDate().toString().padStart(2, "0");

    return `${weekday}, ${month} ${day}`;
}

// Format hour to be displayed in the hourly forecast table
export const formatHour = (hour) => {
    const date = new Date(hour);
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
    const dayNumber = date.getDate().toString().padStart(2, "0");
    const formattedTime = date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }).toUpperCase();

    return `${dayName} ${dayNumber} ${formattedTime}`;
}