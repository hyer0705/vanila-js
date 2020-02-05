// ** coords 좌표
const API_KEY = "2904e2df641fb313f72205a657662958";
const COORDS = "coords";

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
    }
}

function init() {
    loadCoords();
}
init();