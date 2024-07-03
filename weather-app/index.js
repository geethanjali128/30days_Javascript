


var API_KEY="c6bcc63b82083244663b86926c9dd17e";
const API_URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchInput= document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const weatherIcon= document.querySelector('.weather-icon')

const checkWeather=async(city)=>{
    const response= await fetch( API_URL + city + `&appid=${API_KEY}` );

    if(response.status == 404){
        document.querySelector('.error').style.display="block"
          document.querySelector('.weather').style.display=none;
    }
    else{
         const data= await response.json();

    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
    document.querySelector('.temp').innerHTML=  Math.round(data.main.temp) + "°C";
    document.querySelector('.wind').innerHTML= Math.round(data.wind.speed) + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src='images/clouds.png'
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src='images/clear.png'
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src='images/drizzle.png'
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src='images/mist.png'
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src='images/rain.png'
    } else{
        weatherIcon.src='images/snow.png'
    }

    document.querySelector('.weather').style.display="block";
    }
    
   
    

}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchInput.value)
})



