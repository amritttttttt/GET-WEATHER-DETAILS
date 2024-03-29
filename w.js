const apikey = "460fba3e6333c218ce6359018e816713";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox = document.querySelector(".search input")

const searchbtn= document.querySelector(".search button")

const weathericon = document.querySelector(".weather-icon")

async function checkweather(city){
const response = await fetch (apiurl + city + `&appid=${apikey}` ) 

if(response.status == 404){
    document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "none"
}else{
    var data = await response.json();
  
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    // document.querySelector(".wind").innerHTML = data.wind.speed

    if(data.weather[0].main == "Clouds"){
        weathericon.src="/project3/clouds.png"
}

else if(data.weather[0].main == "Clear"){
    weathericon.src="/project3/clear.png "
}
else if(data.weather[0].main == "Rain"){
    weathericon.src="weather project\rain.png"
}
else if(data.weather[0].main == "Drizzle"){
    weathericon.src="/project3/drizzle.png"
}
else if(data.weather[0].main == "Mist"){
    weathericon.src="/project3/mist.png"
}

document.querySelector(".weather").style.display = "block"
document.querySelector(".error").style.display = "none"


}

   



}

searchbtn.addEventListener("click",()=>{

    checkweather(searchbox.value);      
    
})
                   