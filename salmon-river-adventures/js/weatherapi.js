// Current weather api call

const apiURL2 = "https://api.openweathermap.org/data/2.5/weather?zip=83549,us&units=imperial&APPID="+openWeatherKey
fetch(apiURL2)
    .then ((response)=> response.json())

    .then ((jsObject) => {
        
        const currentTemp = jsObject.main.temp;
        const currentHumid = jsObject.main.humidity;
        const currentWind = jsObject.wind.speed;
        var imagesrc = `https://openweathermap.org/img/wn/`+ jsObject.weather[0].icon +`.png`;
        const desc = jsObject.weather[0].description;
 
        document.getElementById(`cond`).textContent = desc;
        document.getElementById(`temp`).textContent = currentTemp;
        document.getElementById(`hum`).textContent = currentHumid;
        document.getElementById(`wind`).textContent = currentWind;
        document.getElementById(`icon`).setAttribute('src',imagesrc);
        document.getElementById(`icon`).setAttribute(`alt`, desc);

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
        document.getElementById("chill").textContent = chill;
    });