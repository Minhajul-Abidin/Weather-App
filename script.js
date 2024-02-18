const apiKey = "52626d047638616cab0e1279159472a8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}";

async function checkWeather() {
    const responce = await fetch(apiUrl + `&appid=${apiKey}`);
}