var APIKey = "565413d8c613629871121bd9ec189355";
var searchBtn = document.getElementById("#search-btn");
var cityDetail = document.getElementById("cityDetail");
var currentCity = "singapore"
var lat = localStorage.getItem("lat")
var lon = localStorage.getItem("lon")

console.log(lat)
console.log(lon)


  // searchBtn.addEventListener("click", function(){
  
  //   currentCity = document.querySelector("input").value;
     
  //     localStorage.setItem("city", currentCity);
      
  //   });



function getCoords() {
 
var coordUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    currentCity +
    "&appid=" +
    APIKey;
  fetch(coordUrl)
  .then(function (response) {
    return response.json()
  })
  .then(function(data){

    var cityData = {
      city: currentCity,      
      lon: data.coord.lon,
      lat: data.coord.lat,}

    console.log(cityData)
    localStorage.setItem("lon", data.coord.lon)
    localStorage.setItem("lat", data.coord.lat)
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
        wind: data.wind.speed,}
        
        console.log(conditions)
        localStorage.setItem("icon", data.weather.icon)
        localStorage.setItem("temp", data.main.temp)
      localStorage.setItem("humidity", data.main.humidity)
      localStorage.setItem("humidity", data.wind.speed)
    })
  }
  getWeather()
  
  
  // function citySearch(event){
  //     event.preventDefault();
  
  //     var searchInput = document.querySelector('#search-input').value;
  //     console.log(searchInput)
  
  //     var queryString = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + APIKey;
  
  //     location.assign(queryString);
  // }
  // searchEl.addEventListener('click', citySearch);
  
  
  // .then(function(data) {
//     console.log(data)

//     var cityDetailEl = $("#cityDetail");
//     cityDetailEl.addClass("border")

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
