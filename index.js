// Feature #1
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

// Week 4? not sure what this was for at the moment
function displayTemperature(response) {
  document.querySelector("#currently-viewing").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = response.data.wind.speed;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
// NEED TO SEE IF THIS WORKS BETTER
// function displayTemperature(response) {
//   let temperatureElement = document.querySelector("#");
// }

//search function to locate weather city & call the API
function searchEngine(city) {
  let apiKey = "29a4ad7a3a9232d56b27c341061a6051";
  //let city = document.querySelector("#search-text").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
//search function to locate weather when clicking "enter"
function searchPressEnter(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text").value;
}

//click on "Search" button
let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", searchEngine);

//press enter instead of "Search" button
// let enterSearchButt = document.querySelector("#search-button");
// searchButt.addEventListener("keydown", searchPressEnter);

//added from week 5
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let currentlyViewing = document.querySelector("#currently-viewing");
  let currentDescription = document.querySelector("#current-desc");
  let currentTemperature = document.querySelector("current-temp");
  currentlyViewing.innerHTML = `Currently viewing: ${city}`;
  currentDescription.innerHTML = `${response.data.weather.description}`;
  currentTemperature.innerHTML = `${response.data.main.temp}°C`;
}

//clicking on "Current Location" button to get weather at current location.
function retrieveCurrentCity(position) {
  let apiKey = "29a4ad7a3a9232d56b27c341061a6051";
  let city = document.querySelector("#search-text");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
navigator.geolocation.getCurrentPosition(retrieveCurrentCity);
//
//
//Week 5 Bonus HW Challenge:
function getCoordinates(position) {
  let apiKey = "29a4ad7a3a9232d56b27c341061a6051";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function findCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCoordinates);
  // let searchInput = document.querySelector();
  // axios.get(apiUrl).then(getCoordinates);
}

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
