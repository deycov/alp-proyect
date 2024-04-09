// Llaves de la api
const API_KEY = "&appid=e3c4b117249a89a7e978602f6c833f01";
const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?q=`;
const findCity = document.getElementById("find-city");

const setView = (climeStatus) => {
  const active = document.querySelector("#is-active");
  const titleCity = document.getElementById("title-city");
  const titleTemperature = document.getElementById("title-temperature");
  const description = document.getElementById("text-description");
  const date = document.getElementById("text-date");
  const dateInEnglish = new Date();
  const dateInSpanish = dateInEnglish.toLocaleDateString("es-ES", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
   });
  active.classList.remove('inactive');
  titleCity.innerText = climeStatus.name;
  titleTemperature.innerText = climeStatus.weather[0].main;
  description.innerText = climeStatus.weather[0].description;
  date.innerText = dateInSpanish;
}

const setCaracas = (climeStatus) => {
  const titleCity = document.getElementById("title-city1");
  const titleTemperature = document.getElementById("title-temperature1");
  const description = document.getElementById("text-description1");
  const date = document.getElementById("text-date1");
  const dateInEnglish = new Date();
  const dateInSpanish = dateInEnglish.toLocaleDateString("es-ES", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
   });

  titleCity.innerText = climeStatus.name;
  titleTemperature.innerText = climeStatus.weather[0].main;
  description.innerText = climeStatus.weather[0].description;
  date.innerText = dateInSpanish;
}

const setMedellin = (climeStatus) => {
  const titleCity = document.getElementById("title-city2");
  const titleTemperature = document.getElementById("title-temperature2");
  const description = document.getElementById("text-description2");
  const date = document.getElementById("text-date2");
  const dateInEnglish = new Date();
  const dateInSpanish = dateInEnglish.toLocaleDateString("es-ES", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
   });

  titleCity.innerText = climeStatus.name;
  titleTemperature.innerText = climeStatus.weather[0].main;
  description.innerText = climeStatus.weather[0].description;
  date.innerText = dateInSpanish;
}

const setMiami = (climeStatus) => {
  const titleCity = document.getElementById("title-city3");
  const titleTemperature = document.getElementById("title-temperature3");
  const description = document.getElementById("text-description3");
  const date = document.getElementById("text-date3");
  const dateInEnglish = new Date();
  const dateInSpanish = dateInEnglish.toLocaleDateString("es-ES", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
   });

  titleCity.innerText = climeStatus.name;
  titleTemperature.innerText = climeStatus.weather[0].main;
  description.innerText = climeStatus.weather[0].description;
  date.innerText = dateInSpanish;
}

const getCityClime = async (ENDP,CITY,API_KEY) => {
  const res = await fetch(`${ENDP}${CITY}${API_KEY}`);
  return climeStatus = await res.json();
}

(async () => { 
  const climeCcs = await getCityClime(ENDPOINT,'caracas',API_KEY);
  const climeMedallo = await getCityClime(ENDPOINT,'medellin',API_KEY);
  const climeMiami = await getCityClime(ENDPOINT,'miami',API_KEY);
  setCaracas(climeCcs);
  setMedellin(climeMedallo);
  setMiami(climeMiami);


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


