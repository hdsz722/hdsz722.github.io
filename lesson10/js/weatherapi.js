const openWeatherKey="0117c5a3910ce57d67af660e18122b1f"; /* OpenWeather API Key */

const townName = document.getElementById("town").textContent;
var townId="0";

switch (townName){
    case'Preston, Idaho':
        townId = "5604473";
        break;
    case 'Soda Springs, Idaho':
        break;
    case 'Fish Haven, Idaho':
        break;
    default:
        townId="5604473";
        break;
}

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id={"+townId+"}&appid={"+openWeatherKey+"}"
fetch(apiURL)
//    .then ((response)=> response.jason())
    .then(function(response) {
        return response.json();
    })    
    .then ((jsObject) => {
        console.table(jsonObject); //temporary checking for valid response and data parsingv
        console.log(jsObject);
    });