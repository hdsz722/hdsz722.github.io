//  Forecast API call
const openWeatherKey="0117c5a3910ce57d67af660e18122b1f"; /* OpenWeather API Key */
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?zip=83549,us&units=imperial&APPID="+openWeatherKey;


fetch(apiURL)
    .then ((response)=> response.json())
    .then ((jsObject) => {

        console.log(jsObject);
        
        const forecasts = jsObject.list.filter(x => 
            x.dt_txt.includes(`18:00:00`));


        for (let i=0; i<forecasts.length; i++) {
            const imagesrc = `https://openweathermap.org/img/wn/`+ forecasts[i].weather[0].icon +`.png`;
            const desc = forecasts[i].weather[0].description;

            document.getElementById(`high${i+1}`).textContent = Math.round(forecasts[i].main.temp,0);
            document.getElementById(`low${i+1}`).textContent = Math.round(forecasts[i].main.temp_min,0);
            document.getElementById(`hum${i+1}`).textContent = Math.round(forecasts[i].main.humidity,0);
            document.getElementById(`desc${i+1}`).textContent = forecasts[i].weather[0].description;
            document.getElementById(`wind${i+1}`).textContent = Math.round(forecasts[i].wind.speed,0);
            document.getElementById(`icon${i+1}`).setAttribute('src',imagesrc);
            document.getElementById(`icon${i+1}`).setAttribute(`alt`, desc);
        }
    });

    
// 