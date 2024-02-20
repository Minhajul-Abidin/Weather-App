const apiKey = "52626d047638616cab0e1279159472a8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await responce.json();

  console.log(data);

  var tempCelsius = (data.main.temp - 273.15).toFixed(2);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = tempCelsius + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
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
