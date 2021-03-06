const API_KEY = "9fc16af12f3217a3f63a2ddf3ef3c229";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const temp = document.querySelector("#weather span:nth-child(1)");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const city = document.querySelector("#weather span:nth-child(3)");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;

        if(data.weather[0].main == "Clear"||"Cloud"||"Rain"||"Snow"||"Drizzle"||"Thunderstorm") {
            weather.classList.add(data.weather[0].main);
        } else {
            weather.classList.add("Atmosphere");
        }

        "Mist"||"Smoke"||"Haze"||"Dust"||"Fog"||"Sand"||"Ash"||"Squall"||"Tornado"

        temp.innerText= `${Math.round(data.main.temp)}º`;
        console.dir(data);
    });
}

function onGeoError() {
    alert("Can't find you, No weather for you. ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
