const openWeatherKey="0117c5a3910ce57d67af660e18122b1f"; /* OpenWeather API Key */

const townName = document.getElementById("town").textContent;
var townId="0";

switch (townName){
    case `Preston, Idaho`:
        townId = "5604473";
        break;
    case `Soda Springs, Idaho`:
        break;
    case `Fish Haven, Idaho`:
        break;
    default:
        townId="5604473";
        break;
}

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id="+townId+"&units=imperial&APPID="+openWeatherKey
fetch(apiURL)
    .then ((response)=> response.json())
    .then ((jsObject) => {
        console.log(jsObject);
        const currentTemp = document.querySelector(`#current-temp`);
        currentTemp.textContent = jsObject.main.temp;

        const imagesrc = `https://openweathermap.org/img/wn/`+ jsObject.weather[0].icon +`.png`;
        const desc = jsObject.weather[0].description;
        document.getElementById(`imagesrc`).textContent = imagesrc;
        document.getElementById(`icon`).setAttribute('src',imagesrc);
        document.getElementById(`icon`).setAttribute(`alt`, desc);
    });