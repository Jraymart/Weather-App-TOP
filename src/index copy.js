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
    `<img class = "condition-icon"> ${data.feelslike}°${
      unit === "metric" ? "C" : "F"
    }`,
    `<img class = "condition-icon">${data.windspeed}`,
    `<img class = "condition-icon">${data.cloudcover}`,
    `<img class = "condition-icon">${data.humidity}`,
    `<img class = "condition-icon">${data.uvindex}`,
    `<img class = "condition-icon">${data.precipprob}`,
    `<img class = "condition-icon">` + formatTime(data.sunrise),
    `<img class = "condition-icon">` + formatTime(data.sunset),
  ];

  const conditionIcons = [
    require("./img/Icons/wi-thermometer.svg"),
    require("./img/Icons/wi-strong-wind.svg"),
    require("./img/Icons/wi-cloud.svg"),
    require("./img/Icons/wi-humidity.svg"),
    require("./img/Icons/wi-day-sunny.svg"),
    require("./img/Icons/wi-raindrops.svg"),
    require("./img/Icons/wi-sunrise.svg"),
    require("./img/Icons/wi-sunset.svg"),
  ];

  const conditionTitles = [
    `Feels Like`,
    `Wind Speed${unit === "metric" ? " (km/h)" : " (mi/hr)"}`,
    "Cloud Cover %",
    "Humidity %",
    "UV Index",
    "Rain %",
    "Sunrise (AM)",
    "Sunset (PM)",
  ];

  document.querySelectorAll(".today-conditions").forEach((div, index) => {
    div.innerHTML = `
      <div class="condition-values">${conditionValues[index]}</div>
      <div class="condition-title">${conditionTitles[index]}</div>
    `;
    div.querySelector(".condition-icon").src = conditionIcons[index];
  });

  updateColors();
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
function updateColors() {
  document.querySelectorAll(".container > div > *").forEach((el) => {
    el.style.backgroundColor = unitBtn.checked ? "#106c5b" : "#344b99";
  });
  document
    .querySelectorAll("header,.condition-title, .date, .current,.high-low")
    .forEach((el) => {
      el.style.backgroundColor = unitBtn.checked ? "#052e29" : "#202a4b";
    });
  document.querySelector("body").style.backgroundColor = unitBtn.checked
    ? "#17b592"
    : "#5888d9";
}
unitBtn.addEventListener("change", () => {
  toggleUnit();
  getWeather(weatherLocation);
});
// toggleUnit();
getWeather("Vancouver");
