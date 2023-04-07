var searchEl = document.getElementById("#searchResults");
var cityDetail = document.getElementById("cityDetail");

var APIKey = "565413d8c613629871121bd9ec189355";
var currentCity = "London"; 

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
  .then(function(reply){
    console.log(reply.coord.lon)
    localStorage.setItem("lon", reply.coord.lon)
    console.log(reply.coord.lat)
    localStorage.setItem("lat", reply.coord.lat)
  })
}
getCoords()



// function citySearch(event){
//     event.preventDefault();

//     var searchInput = document.querySelector('#search-input').value;
//     console.log(searchInput)

//     var queryString = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + APIKey;

//     location.assign(queryString);
// }
// searchEl.addEventListener('click', citySearch);

// function getWeather(data){
//     var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=565413d8c613629871121bd9ec189355";

//     fetch(requestUrl)
//     .then(function(response){
//     return response.json()}
// )

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
