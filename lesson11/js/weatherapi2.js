const openWeatherKey="0117c5a3910ce57d67af660e18122b1f"; /* OpenWeather API Key */

const townName = document.getElementById("town").textContent;
var townId="0";

switch (townName){
    case `Preston, Idaho`:
        townId = "5604473";
        break;
    case `Soda Springs, Idaho`:
        townId = "5607916";
        break;
    case `Fish Haven, Idaho`:
        townId = "5585010";
        break;
    default:
        break;
}

// Current weather api call

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id="+townId+"&units=imperial&APPID="+openWeatherKey
fetch(apiURL)
    .then ((response)=> response.json())

    .then ((jsObject) => {
        
        const currentTemp = jsObject.main.temp;
        const currentHumid = jsObject.main.humidity;
        const currentWind = jsObject.wind.speed;
        var imagesrc = `https://openweathermap.org/img/wn/`+ jsObject.weather[0].icon +`.png`;
        const desc = jsObject.weather[0].description;
 
        document.getElementById(`current-cond`).textContent = desc;
        document.getElementById(`current-temp`).textContent = currentTemp;
        document.getElementById(`humidity`).textContent = currentHumid;
        document.getElementById(`wind`).textContent = currentWind;
        document.getElementById(`icon0`).setAttribute('src',imagesrc);
        document.getElementById(`icon0`).setAttribute(`alt`, desc);

        var chill = 0;
        const t = currentTemp;
        const s = currentWind;
        if (t <= 50 && s >= 3) {
            chill = (35.74 + (0.6215 * t) - (35.75* Math.pow(s, .16)) + (.4275 * t * Math.pow(s, .16))).toFixed(1);
        /*   A wind chill value cannot be calculated for wind speeds less that 3mph  */
        } else { 
        /*    A wind chill value cannot be calculated for temperatures above 50°F */
            chill = "N/A";
        }        
        document.getElementById("wind-chill").textContent = chill;
    });

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then((response) => response.json())

    .then((jsObject) => {
        const towns = jsObject['towns']
        const townName = document.getElementById("town").textContent;
//        console.table(towns); //temporary checking for valid response and data parsing

        towns.forEach(town => {
            let currTown = townName.startsWith(town.name);
            if (currTown) {
                for(i = 0; i< town.events.length; i++){

                    let events = document.createElement('p');

                    events.textContent = town.events[i];
                    events.setAttribute(`class`, `com-events`);
                    
                    document.querySelector(`.event-container`).appendChild(events);
                }
            };
        })
    });
