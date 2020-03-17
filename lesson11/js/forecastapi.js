//  Forecast API call
const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id="+townId+"&units=imperial&APPID="+openWeatherKey
fetch(apiURL2)
    .then ((response)=> response.json())
    .then ((jsObject) => {
        console.log(jsObject);

 //       const forecasts = [];

        const forecasts = jsObject.list.filter(x => 
            x.dt_txt.includes(`18:00:00`));
//            console.log(forecasts);

        for (let i=0; i<forecasts.length; i++) {
            document.getElementById(`day${i+1}High`).textContent = Math.round(forecasts[i].main.temp,0);
            
            const imagesrc = `https://openweathermap.org/img/wn/`+ forecasts[i].weather[0].icon +`.png`;
            const desc = forecasts[i].weather[0].description;
            document.getElementById(`icon${i+1}`).setAttribute('src',imagesrc);
            document.getElementById(`icon${i+1}`).setAttribute(`alt`, desc);
        }
    });

    
// 