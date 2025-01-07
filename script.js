

const searcText = document.querySelector(".search");
const searchButton= document.querySelector(".search-button");
const cityName=document.querySelector(".city");
const humidity=document.querySelector(".humidity");
const windspeed=document.querySelector(".wind");
const temperature=document.querySelector(".temp");
const weather=document.querySelector(".weather");


//  var city;
 
  const api="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  async function checkWeather(city){
    const response = await fetch(api + city + `&appid=${api_key}`);
    var data = await response.json();

    console.log(data);
    cityName.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity + "%";
    temperature.innerHTML=data.main.temp + "°c";
    windspeed.innerHTML=data.wind.speed + "km/h";
   
    const tempValue=data.main.temp;
    if (tempValue > 30) {
        weather.src = "images/clear.png";
      } else if (tempValue <= 6) {
        weather.src = "images/snow.png";
      } else if (tempValue >= 23 && tempValue <= 27) {
        weather.src = "images/mist.png";
      } else if (tempValue >= 20 && tempValue <= 22) {
        weather.src = "images/clouds.png";
      } else if (tempValue >= 15 && tempValue <= 19) {
        weather.src = "images/rain.png";
      } else if (tempValue >= 7 && tempValue <= 14) {
        weather.src = "images/drizzle.png";
      } else {
        weather.src = "images/weather.png";
      }
    
    }

  
  checkWeather();

  searchButton.addEventListener("click", () => {
    checkWeather(searcText.value.trim());
  
    /*if (city === "") {
      alert("Please enter a city name.");
    } else {
      cityName.textContent = city; // Update cityName with the input value
      console.log(`Searching for weather in: ${city}`);
      //cityName.innerHTML=data.name;
      humidity.innerHTML=data.main.humidity + "%";
      temperature.innerHTML=data.main.temp + "°c";
      windspeed.innerHTML=data.wind.speed + "km/h";
    }*/
  });
