const apiKey = "8375c7f535ba569ed40f3fca46b08f82";
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

const cityInput = document.getElementById("city");
const windInput = document.getElementById("wind");
const humidInput = document.getElementById("humid");
const pressureInput = document.getElementById("pressure");
const tempInput = document.getElementById("temp");


var city;
var response = {};

searchBtn.addEventListener('click', () => {

    city = searchInput.value;

    if (city != "" && city != null && city != undefined) {
        searchInput.value = "";
        searchWeather(city);

    } else {
        searchInput.value = "";
        cityInput.innerHTML = "Invalid Input"

    }
})

function searchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(result => result.json())
        .then(res => doChanges(res));
}

function doChanges(res) {
    response = res;
    let cityName, humid, wind, pressure, temp;

    cityName = response.name;
    cityInput.innerHTML = cityName;

    temp = response.main.temp;
    tempInput.innerHTML = temp + "&deg;C";

    humid = response.main.humidity;
    humidInput.innerHTML = "Humidity: " + humid;

    pressure = response.main.pressure;
    pressureInput.innerHTML = "Pressure: " + pressure;

    wind = response.wind.speed;
    windInput.innerHTML = "Wind-Speed: " + wind;

}
