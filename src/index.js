import "./style.css";
import "./reset.css";

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY
// Key: YEK9UJXMAXYY8F3CUHTJCWD3E
const virtualCrossingURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const virtualCrossingKey = "?key=YEK9UJXMAXYY8F3CUHTJCWD3E";
const currentDate = new Date().toJSON().slice(0, 10);

let unit = "metric";
let weatherData = null;
let weatherLocation = null;
async function getWeather(location) {
  try {
    const url = `${virtualCrossingURL}${location}/${currentDate}${virtualCrossingKey}&unitGroup=${unit}`;
    const urlResponse = await fetch(url);
    const data = await urlResponse.json();

    weatherData = data;
    weatherLocation = weatherData.resolvedAddress;
    displayWeather();
  } catch (error) {
    console.log(error);
  }
}

function displayWeather() {
  const today = weatherData.days[0];
  processWeatherDataToday(today);

  const week = weatherData.days.slice(1, 8);
  week.forEach((day) => {
    processWeatherData(day);
  });
}

function processWeatherDataToday(data) {
  const location = document.querySelector(".location > h1");
  location.textContent = weatherLocation;

  const weatherIcon = document.querySelector(".icon");
  weatherIcon.src = require(`./img/WeatherIcons/${data.icon}.svg`);
  const temp = document.querySelector(".current > h2");
  if (unit == "metric") {
    temp.innerHTML = data.temp + ` &deg;C`;
  } else {
    temp.innerHTML = data.temp + ` &deg;F`;
  }

  const datetime = document.querySelector(".date > h2");
  datetime.textContent = formatDate(data.datetime);

  const high = document.querySelector(".high");
  high.innerHTML = "High: " + data.tempmax + `&deg;`;
  const low = document.querySelector(".low");
  low.innerHTML = "Low: " + data.tempmin + `&deg;`;

  const conditions = document.querySelector(".conditions > p");
  conditions.textContent = data.description;
  console.log(data.feelslike);
  console.log(data.conditions);
  console.log(data.description);
}

function formatDate(datetime) {
  const date = new Date(datetime);

  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(date);
}
function processWeatherData(data) {
  // console.log(data);
  console.log(data.datetime);
  console.log(data.temp);
  console.log(data.feelslike);
  console.log(data.conditions);
}

function toggleUnit() {
  unit = unit === "metric" ? "us" : "metric";
  displayWeather();
}
const searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const search = document.querySelector("#search").value.trim();
  getWeather(search);
});
const unitBtn = document.querySelector("#checkbox-toggle");
unitBtn.addEventListener("click", () => {
  toggleUnit();
  getWeather(weatherLocation);
});
// toggleUnit();
getWeather("Vancouver");
