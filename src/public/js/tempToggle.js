// °C & °F buttons (change temperature units)
document.getElementById("btn-fahrenheit").addEventListener("click", () => {
    document.getElementById("btn-celsius").classList.remove("active");
    document.getElementById("btn-fahrenheit").classList.add("active");

    document.querySelectorAll(".celsius").forEach((element) => {
        element.classList.add("hidden");
    });
    document.querySelectorAll(".fahrenheit").forEach((element) => {
        element.classList.remove("hidden");
    });
});

document.getElementById("btn-celsius").addEventListener("click", () => {
    document.getElementById("btn-fahrenheit").classList.remove("active");
    document.getElementById("btn-celsius").classList.add("active");

    document.querySelectorAll(".fahrenheit").forEach((element) => {
        element.classList.add("hidden");
    });
    document.querySelectorAll(".celsius").forEach((element) => {
        element.classList.remove("hidden");
    });
});