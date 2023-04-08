var APIKey = "565413d8c613629871121bd9ec189355";
var cityInput = document.getElementById("#city-input")
var searchBtn = document.getElementById("#search-btn");
var cityDetail = document.getElementById("current-conditions");
var currentCity = "london"; 
var lat = localStorage.getItem("lat")
var lon = localStorage.getItem("lon")
var date = localStorage.getItem("date")


$(document).ready(function(){
    // Get value on button click and show alert
    $("#search-btn").click(function(){
        var city = $("#city-input").val();
        alert(city);
    });
});


// console.log(lat)
// console.log(lon)

function getCoords() {
 
var coordUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&appid=" + APIKey;

  fetch(coordUrl)
  .then(function (response) {
    return response.json()
  })
  .then(function(data){

    var cityData = {
      city: currentCity,      
      lon: data.coord.lon,
      lat: data.coord.lat,
      date: data.dt,}

      localStorage.setItem("lon", data.coord.lon)
      localStorage.setItem("lat", data.coord.lat)
      localStorage.setItem("date", data.dt)
      
    console.log(cityData)
  })
}
getCoords()


function getWeather(){
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;

    fetch(requestUrl)
    .then(function(response){
      return response.json()})
      
      .then(function(data){
        
      var conditions = {
        
        icon: data.weather.icon,
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
      }
      console.log(conditions)

      var currentConditions = $("#current-conditions");
  
      var cityName = $("<h2>");
      cityName.text(currentCity)
      currentConditions.append(cityName)

      var currentCityDate = date;
      console.log(currentCityDate)
      currentCityDate = dayjs(currentCityDate).format("MM/DD/YYYY");
      var currentDateEl = $('<span>');
      currentDateEl.text(` (${currentCityDate}) `);
      cityName.append(currentDateEl);
                 
      var currentCityWeatherIcon = data.current.weather[0].icon; 
      var currentWeatherIconEl = $('<img>');
      currentWeatherIconEl.attr("src", "http://openweathermap.org/img/wn/" + currentCityWeatherIcon + ".png");
      cityNameEl.append(currentWeatherIconEl);

      var currentCityTemp = data.current.temp;
      var currentTempEl = $('<p>')
      currentTempEl.text(`Temp: ${currentCityTemp}°F`)
      currentConditionsEl.append(currentTempEl);        
        
      var currentCityWind = data.current.wind_speed;
      var currentWindEl = $('<p>')
      currentWindEl.text(`Wind: ${currentCityWind} MPH`)
      currentConditionsEl.append(currentWindEl);
            
      var currentCityHumidity = data.current.humidity;
      var currentHumidityEl = $('<p>')
      currentHumidityEl.text(`Humidity: ${currentCityHumidity}%`)
      currentConditionsEl.append(currentHumidityEl);

      console.log(currentDate)
    


//     cityDetailEl.addClass("border")
        
      //   localStorage.setItem("icon", data.weather.icon)
      //   localStorage.setItem("temp", data.main.temp.imperial)
      // localStorage.setItem("humidity", data.main.humidity)
      // localStorage.setItem("wind", data.wind.speed)
    })
  }
  getWeather()
  
  

  
  
  // .then(function(data) {
//     console.log(data)

//     

//     var cityName = $("<h2>")
//     cityName.text(currentCity)
//     cityDetailEl.append(cityName)

//     var currentCityDate = data.current.dt;
//     currentCityDate = moment.unix(currentCityDate).format("MM/DD/YYYY");
//     var currentDateEl = $("<span>");
//     currentDateEl.text("${currentCityDate}")
//     cityName.append(currentDateEl)}

// )}

// fetchButton.addEventListener('click', getWeather);

  // function citySearch(event){
  //     event.preventDefault();
  
  //     var searchInput = document.querySelector('#search-input').value;
  //     console.log(searchInput)
  
  //     var queryString = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + APIKey;
  
  //     location.assign(queryString);
  // }
  // searchEl.addEventListener('click', citySearch);