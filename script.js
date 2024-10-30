async function defaultWeather() {
    const defaultResponse = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=f34ff07c84e47992e446b5ac75a4b69a&units=metric")
    .then(data=>data.json())
    .then(data1=>displayDefault(data1))
    
    
}

function displayDefault(item){
    console.log(item);
    document.getElementById('displayCity').innerHTML=`${item.name}`;
    const defaultWeather = item.weather[0].main;
    
    if(defaultWeather=="Clear"){
        document.getElementById('weatherImage').src="images/clear.png"
        document.getElementById('bgVideo').src="videos/clear.mp4"
    }
    else if(defaultWeather=="Clouds"){
        document.getElementById('weatherImage').src="images/clouds.png"
        document.getElementById('bgVideo').src="videos/clouds.mp4"
    }
    else if(defaultWeather=="Drizzle"){
        document.getElementById('weatherImage').src="images/drizzle.png"
        document.getElementById('bgVideo').src="videos/drizzle.mp4"
    }
    else if(defaultWeather=="Mist"){
        document.getElementById('weatherImage').src="images/mist.png"
        document.getElementById('bgVideo').src="videos/mist.mp4"
    }
    else if(defaultWeather=="Rain"){
        document.getElementById('weatherImage').src="images/rain.png"
        document.getElementById('bgVideo').src="videos/rain.mp4"
    }
    else{
        document.getElementById('weatherImage').src="images/snow.png"
        document.getElementById('bgVideo').src="videos/snow.mp4"
    }

    document.getElementById('temp').innerHTML=`${Math.round(item.main.temp)}°c`
    document.getElementById('condition').innerHTML=`${item.weather[0].main}`
    document.getElementById('humidityPercent').innerHTML=`${item.main.humidity}%`
    document.getElementById('windSpeed').innerHTML=`${item.wind.speed} km/h`
}

defaultWeather()

async function searchWeather(){
    const search_city = document.getElementById('city').value;
    const api = "https://api.openweathermap.org/data/2.5/weather?q="
    const response = await fetch(`${api}${search_city}&appid=f34ff07c84e47992e446b5ac75a4b69a&units=metric`)
    .then(data=>data.json())
    .then(data1=>displayWeather(data1))

}

function displayWeather(item){
    console.log(item);
    document.getElementById('displayCity').innerHTML=`${item.name}`;
    const currentWeather = item.weather[0].main;
    
    if(currentWeather=="Clear"){
        document.getElementById('weatherImage').src="images/clear.png"
        document.getElementById('bgVideo').src="videos/clear.mp4"

    }
    else if(currentWeather=="Clouds"){
        document.getElementById('weatherImage').src="images/clouds.png"
        document.getElementById('bgVideo').src="videos/clouds.mp4"

    }
    else if(currentWeather=="Drizzle"){
        document.getElementById('weatherImage').src="images/drizzle.png"
        document.getElementById('bgVideo').src="videos/drizzle.mp4"

    }
    else if(currentWeather=="Mist"){
        document.getElementById('weatherImage').src="images/mist.png"
        document.getElementById('bgVideo').src="videos/mist.mp4"
       
    }
    else if(currentWeather=="Rain"){
        document.getElementById('weatherImage').src="images/rain.png"
        document.getElementById('bgVideo').src="videos/rain.mp4"

    }
    else{
        document.getElementById('weatherImage').src="images/snow.png"
        document.getElementById('bgVideo').src="videos/snow.mp4"

    }

    document.getElementById('temp').innerHTML=`${Math.round(item.main.temp)}°c`
    document.getElementById('condition').innerHTML=`${item.weather[0].main}`
    document.getElementById('humidityPercent').innerHTML=`${item.main.humidity}%`
    document.getElementById('windSpeed').innerHTML=`${item.wind.speed} km/h`
}

