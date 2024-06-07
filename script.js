let show = document.getElementById("show");
let search = document.getElementById("search");
let cityVal = document.getElementById("city");

let getWeather = () => {
  let cityValue = cityVal.value;
  if (cityValue.length == 0) {
    show.innerHTML = `<h3 class="error">Please enter a city name</h3>`;
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=7090918a71ec9403f16ae1b9411a34de&units=metric`;
    cityVal.value = "";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data); // Logging the data received from the API
        show.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1>
          <h4 class="desc" style="padding: 5%; margin-top: 5%">Humidity: ${data.main.humidity} %</h4>
          <h4 class="desc" >Wind Speed: ${data.wind.speed} m/s</h4>
          <h4 class="desc" >Visibility: ${data.visibility} meters</h4>
        `;
      })
      .catch(() => {
        show.innerHTML = `<h3 class="error">City not found</h3>`;
      });
  }
};

search.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
