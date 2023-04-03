var apiKey = "565413d8c613629871121bd9ec189355"

var currentCity;

function getWeather(data){
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"
    fetch(requestUrl)
    .then(function(response){
    return response.json()}
)
.then(function(data)) {
    var currentWeather = $("currentWeather");
    currentWeather.addClass("border")

    var cityName = $("<h2>")
    cityName.text(currentCity)
    currentWeather.append(cityName)

    var currentCityDate = dayjs().format("MMM D, YYYY");
    var currentDateEl = $("<span>");
    currentDateEl.text(currentCityDate)
    cityName.append(currentDateEl)

 
}