const weather = document.querySelector(".js-weather");

// ** coords 좌표
const API_KEY = "2904e2df641fb313f72205a657662958";
const COORDS = "coords";

function getWeahter(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function (response) {
        return response.json()
    }).then(function (json) {
        // console.log(json)
        const temparature = json.main.temp;
        const place = json.name;

        weather.innerText = `${temparature} @ ${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, // latitude: latitude
        longitude // longitude: longitude
    };

    saveCoords(coordsObj);
    getWeahter(latitude, longitude);
}

function handleGeoError() {
    console.log("Can't access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        // getWeather
        const parsedCoords = JSON.parse(loadedCoords);
        getWeahter(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}
init();