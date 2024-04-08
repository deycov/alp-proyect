// Llaves de la api
const API_KEY = "&appid=e3c4b117249a89a7e978602f6c833f01";
const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?q=`;
const findCity = document.getElementById("find-city");

const setView = (climeStatus) => {
  const titleCity = document.getElementById("title-city");
  const titleTemperature = document.getElementById("title-temperature");
  const description = document.getElementById("text-description");
  const date = document.getElementById("text-date");

  titleCity.innerText = climeStatus.name;
  titleTemperature.innerText = climeStatus.weather[0].main;
  description.innerText = climeStatus.weather[0].description;
  date.innerText = new Date();
}

const getCityClime = async (ENDP,CITY,API_KEY) => {
  const res = await fetch(`${ENDP}${CITY}${API_KEY}`);
  return climeStatus = await res.json();
}

(async () => { 
  const climeStatus = await getCityClime(ENDPOINT,'caracas',API_KEY);
  setView(climeStatus);
})()


findCity.addEventListener("click", async (event)=>{
  event.preventDefault();
  const cityName = document.getElementById("city")
  const error = document.getElementById("error-message")
  if(cityName.value){
    let city = cityName.value;
    const climeStatus = await getCityClime(ENDPOINT,city,API_KEY);
    setView(climeStatus);
  }else{
    error.innerText = "Debe ingresar una ciudad valida"
  }
});


