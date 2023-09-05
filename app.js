const apiKey = "8fd61e014f7b3159f96643ac6b32c335";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input")
let searchBtn = document.querySelector(".search button")
let weather = document.querySelector(".weather-icon")



async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json();


    console.log(data);

    let cityTown = document.querySelector(".city").innerHTML = data.name;
    let townTem = document.querySelector(".temp").innerHTML =Math.round(data.main.temp)  + "°c";
    let townHum = document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    let townWind = document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Rain"){
        weather.src = "/images/rain.png"
    }else if(data.weather[0].main == "Clear"){
        weather.src = "/images/clear.png"
    }
    else if(data.weather[0].main == "Snow"){
        weather.src = "/images/snow.png"
    }
    else if(data.weather[0].main == "Cloud"){
        weather.src = "/images/clouds.png"
    }

}

searchBtn.addEventListener("click", ()=>{
 checkWeather(searchBox.value)
})



