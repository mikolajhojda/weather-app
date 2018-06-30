var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("city").innerHTML = myObj.name;
        var temp = myObj.main.temp;
        document.getElementById("temp").innerHTML = Math.ceil(temp) + "°C";
        document.getElementById("pres").innerHTML = myObj.main.pressure + " Pa";
        document.getElementById("hum").innerHTML = myObj.main.humidity + "%";
        document.getElementById("speed").innerHTML = myObj.wind.speed + " m/s";

        var weather = myObj.weather[0].description;
        if (weather == "clear sky") {
            document.getElementById("weather").src = "img/clear-sky.png";
        }

        if (weather == "few clouds") {
            document.getElementById("weather").src = "img/few-clouds.png";
        }

        if (weather == "scattered clouds") {
            document.getElementById("weather").src = "img/scattered-clouds.png";
        }

        if (weather == "broken clouds") {
            document.getElementById("weather").src = "img/broken-clouds.png";
        }

        if (weather == "shower rain") {
            document.getElementById("weather").src = "img/shower-rain.png";
        }

        if (weather == "rain") {
            document.getElementById("weather").src = "img/rain.png";
        }

        if (weather == "thunderstorm") {
            document.getElementById("weather").src = "img/thunderstorm.png";
        }

        if (weather == "snow") {
            document.getElementById("weather").src = "img/snow.png";
        }

        if (weather == "mist") {
            document.getElementById("weather").src = "img/mist.png";
        }
    }
};

if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
}

function success(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    xmlhttp.open("GET", "https://openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=b6907d289e10d714a6e88b30761fae22", true);
    xmlhttp.send();
}

function fail() {}

var d = new Date();
if (d.getMonth() < 10) {
    let month = d.getMonth();
    month = month + 1;
    document.getElementById('date').textContent = d.getDate() + ".0" + month;
}

if (d.getMonth > 9) {
    document.getElementById('date').textContent = d.getDate() + "." + d.getMonth();
}
