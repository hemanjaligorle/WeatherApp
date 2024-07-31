const apiKey="enter your key here";
     const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
     const searchBox=document.querySelector(".search input");
     const searchBtn=document.querySelector(".search button");
     const weatherIcon=document.querySelector(".weather-icon");
 
    async function checkWeather(city){
        const response= await fetch(apiUrl +city+ `&appid=${apiKey}`);
        if(response.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }
        else{
        var data= await response.json();
        //console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".speed").innerHTML=data.wind.speed+"m/s"; 
        document.querySelector(".Cloudiness").innerHTML= data.clouds.all +"%"; 
        document.querySelector(".description").innerHTML=data.weather[0].description;
        document.querySelector(".feels_like").innerHTML= "Feels like "+ Math.round(data.main.feels_like) +"°C";
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/cloudy.gif";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/sun.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.gif";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.gif";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png";
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src="images/snow.png";
        }
        else if(data.weather[0].main=="Thunderstorm"){
            weatherIcon.src="images/thunderstrom.gif";
        }

        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";
    }
    } 
    searchBtn.addEventListener("click",()=>{ checkWeather(searchBox.value);})  
   
