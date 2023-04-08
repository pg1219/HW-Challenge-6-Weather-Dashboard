var APIKey = "565413d8c613629871121bd9ec189355";
var cityInput = document.getElementById("#city-input");
var searchBtn = document.getElementById("#search-btn");
var cityDetail = document.getElementById("current-conditions");
var currentCity = localStorage.getItem("city");
var lat = localStorage.getItem("lat");
var lon = localStorage.getItem("lon");
var date = localStorage.getItem("date");
var icon = localStorage.getItem("icon");
var temp = localStorage.getItem("temp");
var humidity = localStorage.getItem("humidity");
var wind = localStorage.getItem("wind");

// store search value
$(document).ready(function () {
  $("#search-btn").click(function () {
    var city = $("#city-input").val();
    localStorage.setItem("city", city);
  });
});


function getCoords() {
  var coordUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    currentCity +
    "&appid=" +
    APIKey;

  console.log(coordUrl);

  fetch(coordUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var cityData = {
        city: currentCity,
        lon: data.coord.lon,
        lat: data.coord.lat,
        date: data.dt,
      };

      localStorage.setItem("lon", data.coord.lon);
      localStorage.setItem("lat", data.coord.lat);
      localStorage.setItem("date", data.dt);

      console.log(cityData);
    });
}
getCoords();

function getWeather() {
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    APIKey +
    "&units=imperial";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      var conditions = {
        icon: data.weather[0].icon,
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
      };

      localStorage.setItem("icon", data.weather[0].icon);
      localStorage.setItem("temp", data.main.temp);
      localStorage.setItem("humidity", data.main.humidity);
      localStorage.setItem("wind", data.wind.speed);

      console.log(conditions);

      var currentConditions = $("#current-conditions");

      var cityName = $("<h2>");
      cityName.text(currentCity);
      currentConditions.append(cityName);

      var currentCityDate = date;
      console.log(currentCityDate);
      currentCityDate = dayjs.unix(currentCityDate).format("MM/DD/YYYY");
      var currentDate = $("<span>");
      currentDate.text(` - ${currentCityDate} `);
      cityName.append(currentDate);

      var currentCityWeatherIcon = icon;
      var currentWeatherIcon = $("<img>");
      currentWeatherIcon.attr(
        "src",
        "http://openweathermap.org/img/wn/" + currentCityWeatherIcon + ".png"
      );
      cityName.append(currentWeatherIcon);

      var currentCityTemp = temp;
      var currentTemp = $("<p>");
      currentTemp.text(`Temp: ${currentCityTemp}°F`);
      currentConditions.append(currentTemp);

      var currentCityWind = wind;
      var currentWind = $("<p>");
      currentWind.text(`Wind: ${currentCityWind} MPH`);
      currentConditions.append(currentWind);

      var currentCityHumidity = humidity;
      var currentHumidity = $("<p>");
      currentHumidity.text(`Humidity: ${currentCityHumidity}%`);
      currentConditions.append(currentHumidity);
    });

  var fiveDayForecastHeader = $("#five-day-header");
  var fiveDayHeader = $("<h2>");
  fiveDayHeader.text("5-Day Forecast:");
  fiveDayForecastHeader.append(fiveDayHeader);
  
  var fiveDayForecastEl = $("#five-day")



  var fiveDayUrl =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    APIKey +
    "&units=imperial";

  console.log(fiveDayUrl);

  fetch(fiveDayUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      for (var i = 1; i <= 5; i++) {
      var dateFive;
      var tempFive;
      var iconFive;
      var windFive;
      var humidityFive;

      dateFive = data.list[i].dt;
      dateFive = dayjs.unix(dateFive).format("MM/DD/YYYY");

      console.log(dateFive);

      tempFive = data.list[i].main.temp;
      iconFive = data.list[i].weather[0].icon;
      windFive = data.list[i].wind.speed;
      humidityFive = data.list[i].main.humidity;

      console.log(tempFive);
      console.log(iconFive);
      console.log(windFive);
      console.log(humidityFive);

      var card = document.createElement("div");
      card.classList.add("card", "col-2");

      var cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      cardBody.innerHTML = 
      `<h4>${dateFive}</h4>
      <img src= "http://openweathermap.org/img/wn/${iconFive}.png"></img><br>
      ${tempFive}°F<br>
      ${windFive} MPH <br>
      ${humidityFive}%`;

      card.appendChild(cardBody);
      fiveDayForecastEl.append(card);
  }});

}

getWeather();


searchBtn.addEventListener('click', getWeather);
