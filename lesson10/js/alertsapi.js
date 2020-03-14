//  Forecast API call
const apiURL3 = "https://api.openweathermap.org/data/2.5/triggers?id=0117c5a3910ce57d67af660e18122b1f&units=imperial&APPID="+

fetch(apiURL3)
    .then ((response)=> response.json())
    .then ((jsObject) => {
        console.log(jsObject);
    });