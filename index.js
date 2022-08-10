// START OF DATE FORMAT
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
//END OF DATE FORMATE

// START FUNCTION TO SHOW CURRENT WEATHER INFO
function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#currently-viewing-city");
  let descriptionElement = document.querySelector("#current-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
}
// END FUNCTION TO SHOW CURRENT WEATHER INFO

//START FUNCTION TO CALL API TO SEARCH CITY
function searchEngine(city) {
  let apiKey = "29a4ad7a3a9232d56b27c341061a6051";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
//END FUNCTION TO CALL API TO SEARCH CITY

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

//START FUNCTION FOR FORM SEARCH
function searchPressEnter(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#search-text");
  search(cityInputElement.value);
}
//END FUNCTION FOR FORM SEARCH

//Function to allow "Search" interaction
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchPressEnter);
//END FUNCTION TO FIND CURRENT LOCATION??
//UHHH NOT SURE AT THE MOMENT FOR THIS...???
let currentLocationButton = document.querySelector("#curr-loc-but");
currentLocationButton.addEventListener("click", findCurrentLocation);
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
