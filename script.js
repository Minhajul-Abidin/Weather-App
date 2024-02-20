const apiKey = "52626d047638616cab0e1279159472a8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
  const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await responce.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round((data.main.temp - 273.15)) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./images/clouds.png";
  }else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./images/clear.png";
  }else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./images/rain.png";
  }else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "./images/snow.png";
  }else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./images/drizzle.png";
  }else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "./images/mist.png";
  }
}

onload = checkWeather("Mumbai");

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", function(e){
  if (e.key === "Enter") {
    searchBtn.click();
  }
});
