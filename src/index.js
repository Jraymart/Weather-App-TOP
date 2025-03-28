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
    console.log("Error fetching weather data:", error);
  }
}

function displayWeather() {
  const today = weatherData.days[0];
  processWeatherDataToday(today);

  weatherData.days.slice(1, 8).forEach((day) => {
    processWeatherData(day);
  });
}

function processWeatherDataToday(data) {
  document.querySelector(".location > h1").textContent = weatherLocation;
  document.querySelector(
    ".icon"
  ).src = require(`./img/WeatherIcons/${data.icon}.svg`);
  document.querySelector(".current > h2").innerHTML = `${data.temp} &deg;${
    unit === "metric" ? "C" : "F"
  }`;
  document.querySelector(".date > h2").textContent = formatDate(data.datetime);
  document.querySelector(".high").innerHTML = "High: " + data.tempmax + `&deg;`;
  document.querySelector(".low").innerHTML = "Low: " + data.tempmin + `&deg;`;
  document.querySelector(".conditions > p").textContent = data.description;

  updateConditions(data);
}

function updateConditions(data) {
  const conditionValues = [
    `${data.feelslike}°`,
    `${data.windspeed}`,
    `${data.cloudcover}%`,
    `${data.humidity}%`,
    data.uvindex,
    `${data.precipprob}%`,
    formatTime(data.sunrise),
    formatTime(data.sunset),
  ];

  const conditionTitles = [
    "Feels Like",
    `Wind Speed${unit === "metric" ? " (km/h)" : " (mi/hr)"}`,
    "Cloud Cover",
    "Humidity",
    "UV Index",
    "Rain %",
    "Sunrise (AM)",
    "Sunset (PM)",
  ];

  document.querySelectorAll(".today-conditions").forEach((div, index) => {
    div.innerHTML = `
      <div class="condition-data">${conditionValues[index]}</div>
      <div class="condition-title">${conditionTitles[index]}</div>
    `;
  });
}

function formatTime(time) {
  const [hours, minutes] = time.split(":");
  const date = new Date();
  date.setHours(hours, minutes);

  return date
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .replace(/ AM| PM/, "");
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
