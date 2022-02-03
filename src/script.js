function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data.main.temp);

  let dateElement = document.querySelector(`#date`);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);

  let temperatureElement = document.querySelector(`#temperature`);
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector(`#city`);
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector(`#description`);
  descriptionElement.innerHTML = response.data.weather[0].description;

  let sunriseElement = document.querySelector(`#sunrise`);
  sunriseElement.innerHTML = response.data.sys.sunrise;
  let sunsetElement = document.querySelector(`#sunset`);
  sunsetElement.innerHTML = response.data.sys.sunset;
  let humidityElement = document.querySelector(`#humidity`);
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector(`#wind`);
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let city = "San Tan Valley";
let apiKey = "06dbfbcd1325d3e522edc830767aa8d4";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
