/*
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=e6830f1d3acadfd970e3b9d503668a2d&q=";
const searchBox = document.querySelector(".search-box");
const searchButton = document.querySelector(".search-button");
async function weather(city) {
  const response = await fetch(apiUrl + `${city}`);
  let data = await response.json();
  console.log(data);
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity1").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind-speed1").innerHTML = data.wind.speed + "kmph";
}
searchButton.addEventListener("click", ()=>{
  weather(searchBox.value);
})
*/
document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=e6830f1d3acadfd970e3b9d503668a2d&q=";
  const searchBox = document.querySelector(".search-box");
  const searchButton = document.querySelector(".search-button");
  const weatherIcon = document.querySelector(".weather-icon");
  async function weather(city) {
    const response = await fetch(apiUrl + city);
    if (response.status == 404) {
      alert("Invalid city name")
    }
    else{
      let data = await response.json();
    //console.log(data);
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity1").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed1").innerHTML = data.wind.speed + "kmph";
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "weather-app-img/images/clouds.png"
    }
    else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "weather-app-img/images/clear.png"
    }
    else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "weather-app-img/images/rain.png"
    }
    else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "weather-app-img/images/drizzle.png"
    }
    else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "weather-app-img/images/mist.png"
    }
    document.querySelector(".weather").style.display = "block";
    }
    
  }

  searchButton.addEventListener("click", () => {
    weather(searchBox.value);
  });
});
