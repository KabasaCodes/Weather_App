const apiKey = "8fd61e014f7b3159f96643ac6b32c335";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input")
let searchBtn = document.querySelector(".search button")
console.log(searchBtn);

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json();


    console.log(data);

    let cityTown = document.querySelector(".city").innerHTML = data.name;
    let townTem = document.querySelector(".temp").innerHTML =Math.round(data.main.temp)  + "°c";
    let townHum = document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    let townWind = document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

}

searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value)
})



