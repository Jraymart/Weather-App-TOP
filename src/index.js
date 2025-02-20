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

async function getWeather(location) {
  try {
    const url = `${virtualCrossingURL}${location}/${currentDate}${virtualCrossingKey}&unitGroup=${unit}`;
    const urlResponse = await fetch(url);
    const data = await urlResponse.json();

    weatherData = data;
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
  console.log(data);
  console.log(data.datetime);
  console.log(data.temp);
  console.log(data.feelslike);
  console.log(data.conditions);
  console.log(data.description);
  console.log(data.tempmin);
  console.log(data.tempmax);
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
}
// toggleUnit();
getWeather("Vancouver");
