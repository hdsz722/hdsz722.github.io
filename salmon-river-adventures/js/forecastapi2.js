//  Forecast API call
const openWeatherKey="0117c5a3910ce57d67af660e18122b1f"; /* OpenWeather API Key */
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?zip=83549,us&units=imperial&APPID="+openWeatherKey;


fetch(apiURL)
    .then ((response)=> response.json())
    .then ((jsObject) => {

//        console.log(jsObject);
        
        const forecasts = jsObject.list;//.filter(x => 
//            x.dt_txt.includes(`18:00:00`));

        let day1 = forecasts.splice(0,8);
        let day2 = forecasts.splice(0,8);
        let day3 = forecasts.splice(0,8);
        let day4 = forecasts.splice(0,8);
        let day5 = forecasts.splice(0,8);

        console.log(day1);
        console.log(day2);
        console.log(day3);
        console.log(day4);
        console.log(day5);

        let hightemp = "";
        let lowtemp = "";
        let humidity = "";
        let desc = "";
        let imagesrc = "";
        let wind ="";
        for (d = 1; d<=5; d++) {
            switch (d) {
                case  1:
                    hightemp = day1[0].main.temp;
                    lowtemp = day1[0].main.temp_min;
                    for (let i = 0; i <= (day1.length-1); i++) {
                        if (hightemp < day1[i].main.temp) {hightemp = day1[i].main.temp};
                        if (lowtemp > day1[i].main.temp_min) {lowtemp = day1[i].main.temp_min};
                        if (day1[i].dt_txt.includes('18:00:00')) {
                            humidity=Math.round(day1[i].main.humidity,0);
                            wind = Math.round(day1[i].wind.speed,0);
                            imagesrc = `https://openweathermap.org/img/wn/`+ day1[i].weather[0].icon +`.png`;
                            desc = day1[i].weather[0].description;
                        };
                    };
                    document.getElementById(`high${d}`).textContent = Math.round(hightemp,0);
                    document.getElementById(`low${d}`).textContent = Math.round(lowtemp,0);
                    document.getElementById(`hum${d}`).textContent = humidity;
                    document.getElementById(`desc${d}`).textContent = desc;
                    document.getElementById(`wind${d}`).textContent = wind;
                    document.getElementById(`icon${d}`).setAttribute('src',imagesrc);
                    document.getElementById(`icon${d}`).setAttribute(`alt`, desc);
                    break;
                case  2:
                    hightemp = day2[0].main.temp;
                    lowtemp = day2[0].main.temp_min;
                    for (let i = 0; i <= (day2.length-1); i++) {
                        if (hightemp < day2[i].main.temp) {hightemp = day2[i].main.temp};
                        if (lowtemp > day2[i].main.temp_min) {lowtemp = day2[i].main.temp_min};
                        if (day2[i].dt_txt.includes('18:00:00')) {
                            humidity=Math.round(day2[i].main.humidity,0);
                            wind = Math.round(day2[i].wind.speed,0);
                            imagesrc = `https://openweathermap.org/img/wn/`+ day2[i].weather[0].icon +`.png`;
                            desc = day2[i].weather[0].description;
                        };
                    };
                    document.getElementById(`high${d}`).textContent = Math.round(hightemp,0);
                    document.getElementById(`low${d}`).textContent = Math.round(lowtemp,0);
                    document.getElementById(`hum${d}`).textContent = humidity;
                    document.getElementById(`desc${d}`).textContent = desc;
                    document.getElementById(`wind${d}`).textContent = wind;
                    document.getElementById(`icon${d}`).setAttribute('src',imagesrc);
                    document.getElementById(`icon${d}`).setAttribute(`alt`, desc);
                    break;
                case  3:
                    hightemp = day3[0].main.temp;
                    lowtemp = day3[0].main.temp_min;
                    for (let i = 0; i <= (day3.length-1); i++) {
                        if (hightemp < day3[i].main.temp) {hightemp = day3[i].main.temp};
                        if (lowtemp > day3[i].main.temp_min) {lowtemp = day3[i].main.temp_min};
                        if (day3[i].dt_txt.includes('18:00:00')) {
                            humidity=Math.round(day3[i].main.humidity,0);
                            wind = Math.round(day3[i].wind.speed,0);
                            imagesrc = `https://openweathermap.org/img/wn/`+ day3[i].weather[0].icon +`.png`;
                            desc = day3[i].weather[0].description;
                        };
                    };
                    document.getElementById(`high${d}`).textContent = Math.round(hightemp,0);
                    document.getElementById(`low${d}`).textContent = Math.round(lowtemp,0);
                    document.getElementById(`hum${d}`).textContent = humidity;
                    document.getElementById(`desc${d}`).textContent = desc;
                    document.getElementById(`wind${d}`).textContent = wind;
                    document.getElementById(`icon${d}`).setAttribute('src',imagesrc);
                    document.getElementById(`icon${d}`).setAttribute(`alt`, desc);
                    break;
                case  4:
                    hightemp = day4[0].main.temp;
                    lowtemp = day4[0].main.temp_min;
                    for (let i = 0; i <= (day4.length-1); i++) {
                        if (hightemp < day4[i].main.temp) {hightemp = day4[i].main.temp};
                        if (lowtemp > day4[i].main.temp_min) {lowtemp = day4[i].main.temp_min};
                        if (day4[i].dt_txt.includes('18:00:00')) {
                            humidity=Math.round(day4[i].main.humidity,0);
                            wind = Math.round(day4[i].wind.speed,0);
                            imagesrc = `https://openweathermap.org/img/wn/`+ day4[i].weather[0].icon +`.png`;
                            desc = day4[i].weather[0].description;
                        };
                    };
                    document.getElementById(`high${d}`).textContent = Math.round(hightemp,0);
                    document.getElementById(`low${d}`).textContent = Math.round(lowtemp,0);
                    document.getElementById(`hum${d}`).textContent = humidity;
                    document.getElementById(`desc${d}`).textContent = desc;
                    document.getElementById(`wind${d}`).textContent = wind;
                    document.getElementById(`icon${d}`).setAttribute('src',imagesrc);
                    document.getElementById(`icon${d}`).setAttribute(`alt`, desc);
                    break;
                case  5:
                    hightemp = day5[0].main.temp;
                    lowtemp = day5[0].main.temp_min;
                    for (let i = 0; i <= (day5.length-1); i++) {
                        if (hightemp < day5[i].main.temp) {hightemp = day5[i].main.temp};
                        if (lowtemp > day5[i].main.temp_min) {lowtemp = day5[i].main.temp_min};
                        if (day5[i].dt_txt.includes('18:00:00')) {
                            humidity=Math.round(day5[i].main.humidity,0);
                            wind = Math.round(day5[i].wind.speed,0);
                            imagesrc = `https://openweathermap.org/img/wn/`+ day5[i].weather[0].icon +`.png`;
                            desc = day5[i].weather[0].description;
                        };
                    };
                    document.getElementById(`high${d}`).textContent = Math.round(hightemp,0);
                    document.getElementById(`low${d}`).textContent = Math.round(lowtemp,0);
                    document.getElementById(`hum${d}`).textContent = humidity;
                    document.getElementById(`desc${d}`).textContent = desc;
                    document.getElementById(`wind${d}`).textContent = wind;
                    document.getElementById(`icon${d}`).setAttribute('src',imagesrc);
                    document.getElementById(`icon${d}`).setAttribute(`alt`, desc);
                    break;

            }
        };
    });

    
// 