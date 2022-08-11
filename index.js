// START OF DATE FORMAT
function formatDate(timestamp) {
  let now = new Date();

  let currently = document.querySelector("#last-updated");

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  currently.innerHTML = `Last updated on ${day}, ${month} ${date}, ${year} at ${hours}:${minutes}`;
}
//END OF DATE FORMATE

// START FUNCTION TO SHOW CURRENT WEATHER INFO
function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#currently-viewing-city");
  let descriptionElement = document.querySelector("#current-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let dateElement = document.querySelector("#last-updated");
  let iconElement = document.querySelector("#icon");

  celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}
// END FUNCTION TO SHOW CURRENT WEATHER INFO

//START FUNCTION TO CALL API TO SEARCH CITY
function searchEngine(city) {
  let apiKey = "29a4ad7a3a9232d56b27c341061a6051";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
//END FUNCTION TO CALL API TO SEARCH CITY

//START FUNCTION FOR FORM SEARCH
function searchPressEnter(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  searchEngine(cityInputElement.value);
}
//END FUNCTION FOR FORM SEARCH

//START FUNCTION TO RETRIEVE CURRENT CITY??
function retrieveCurrentCity(position) {
  let apiKey = "29a4ad7a3a9232d56b27c341061a6051";
  let city = document.querySelector("#search-text");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
navigator.geolocation.getCurrentPosition(retrieveCurrentCity);
//END FUNCTION TO RETRIEVE CURRENT CITY??
//
//START FUNCTION TO LOCATE CURRENT COORDINATES??
function getCoordinates(position) {
  let apiKey = "29a4ad7a3a9232d56b27c341061a6051";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
//END FUNCTION TO LOCATE CURRENT COORDINATES??
//START FUNCTION TO FIND CURRENT LOCATION??
function findCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCoordinates);
  // let searchInput = document.querySelector();
  // axios.get(apiUrl).then(getCoordinates);
}
//END FUNCTION TO FIND CURRENT LOCATION??
//START FUNCTION TO SHOW IMPERIAL UNITS
function displayImperialTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temperature");
  metricButton.classList.remove("active");
  imperialButton.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}
//END FUNCTION TO SHOW IMPERIAL UNITS
//START FUNCTION TO SHOW METRIC UNITS
function displayMetricTemperature(event) {
  event.preventDefault();
  metricButton.classList.add("active");
  imperialButton.classList.remove("active");
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}
//END FUNCTION TO SHOW METRIC UNITS
//Function to allow "Search" interaction
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchPressEnter);

let celsiusTemperature = null;

//UHHH NOT SURE AT THE MOMENT FOR THIS...???
let currentLocationButton = document.querySelector("#curr-loc-but");
currentLocationButton.addEventListener("click", findCurrentLocation);

let metricButton = document.querySelector("#metric-button");
metricButton.addEventListener("click", displayMetricTemperature);

let imperialButton = document.querySelector("#imperial-button");
imperialButton.addEventListener("click", displayImperialTemperature);
//
//
//
//space
//space
//space
//space
//space
//space
//space
//space
//space
//space
//space
//space
//space
//space

//let searchInput = document.querySelector("#search-text");

//searchInput.innerHTML = `Currently viewing: ${viewing.value}`;

//Feature #3 - Bonus (NO classes or ID's in HTML)
// need to create links/link the buttons with elements for
// C and F, then make a function.
/*

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32)
}
function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  no idea, unfinished and used fake data so will do later
}


let temperatureElement = document.querySelector(#temperature);
let temperature = temperatureElement.innerHTML;
console.log(temperature);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
*/
