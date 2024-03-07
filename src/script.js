const title = document.getElementById("city");
const weatherWindspeed = document.getElementById("windspeed");
const weatherTemperature = document.getElementById("temperature");
const info = document.getElementById("info");
// const weatherLatitude = document.getElementById("latitude");
// const weatherLongitude = document.getElementById("longitude");
// const weatherwWinddirection = document.getElementById("winddirection");
// const newWeathercode = document.getElementById("weathercode");
const getWeather = async () => {
    const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const data = await response.json();
    const { city, latitude, longitude } = data;


    const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
    );
    const weatherData = await weatherResponse.json();
    const { current_weather } = weatherData;
    const { windspeed, winddirection, weathercode, temperature } = current_weather;


    title.textContent = city;
    weatherTemperature.textContent = `Temperature: ${temperature} °C`;
    info.textContent = getWeatherDesc(weathercode);
    weatherWindspeed.textContent = `Windspeed: ${windspeed} km/h`;
    // weatherLatitude.textContent = `Latitude: ${latitude}`;
    // weatherLongitude.textContent = `Longitude: ${longitude}`;
    // weatherwWinddirection.textContent = `Winddirection: ${winddirection}`;
    // newWeathercode.textContent = `Weathercode: ${weathercode}`;
}

function getWeatherDesc(code) {
    switch (code) {
        case 0:
            return "Clear sky"
        case 1:
            return "Mainly clear,"
        case 2:
            return "Partly cloudy"
        case 3:
            return "Overcast"
        case 45:
            return "Fog"
        case 48:
            return "Depositing rime fog"
        case 51:
            return "Light drizzle"
        case 53:
            return "Moderate drizzle"
        case 55:
            return "Dense intensity drizzle"
        case 56:
            return "Light freezing Drizzle"
        case 57:
            return "Dense intensity Freezing Drizzle"
        case 61:
            return "Slight rain"
        case 63:
            return "Moderate rain"
        case 65:
            return "Heavy intensity rain"
        case 66:
            return "Light Freezing Rain"
        case 67:
            return "Heavy Freezing Rain"
        case 71:
            return "Slight Snow fall"
        case 73:
            return "Moderate Snow fall"
        case 75:
            return "Heavy Snow fall"
        case 77:
            return "Snow grains"
        case 80:
            return "Slight Rain showers"
        case 81:
            return "Moderate Rain showers"
        case 82:
            return "Violent Rain showers"
        case 85:
            return "Slight Snow showers"
        case 86:
            return "Heavy Snow showers"
        case 95:
            return "Thunderstorm moderate"
        case 96:
            return "Thunderstorm slight"
        case 99:
            return "Thunderstorm slight"
    }
}
getWeather();
