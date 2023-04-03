var search = document.getElementById('searchBtn')
var cityDetail = document.getElementById('cityDetail')

var APIKey = "565413d8c613629871121bd9ec189355"

var city;

function getWeather(data){
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

    fetch(requestUrl)
    .then(function(response){
    return response.json()}
)

.then(function(data) {
    console.log(data)

    var cityDetailEl = $("#cityDetail");
    cityDetailEl.addClass("border")

    var cityName = $("<h2>")
    cityName.text(currentCity)
    cityDetailEl.append(cityName)

    var currentCityDate = data.current.dt; 
    currentCityDate = moment.unix(currentCityDate).format("MM/DD/YYYY");
    var currentDateEl = $("<span>");
    currentDateEl.text("${currentCityDate}")
    cityName.append(currentDateEl)}


)}

// fetchButton.addEventListener('click', getWeather);
