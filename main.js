const btn = document.querySelector(".submit");
const country = document.querySelector("#country");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity_value");
const wind = document.querySelector(".wind_speed");
const apiKey = "5529a24c78d3724329504419376b2113";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
// image change section
const clouds = document.querySelector(".rain");
const haze = document.querySelector(".haze");
//  data fatching section

async function checkWeather(subValue) {
  const response = await fetch(apiUrl + `&q=${subValue}` + `&appid=${apiKey}`);
  let data = await response.json();
  return data;
}

document.addEventListener("DOMContentLoaded", async () => {
  let dataArr = [];
  try {
    dataArr.push(await checkWeather(country.value));
  } catch (e) {
    console.log("err");
  }
  console.log(dataArr);
  temp.innerHTML = parseInt(dataArr[0].main.temp) + "° C";
  humidity.innerHTML = dataArr[0].main.humidity + "%";
  wind.innerHTML = dataArr[0].wind.speed + "km/h";
  if (dataArr[0].weather[0].main === "Clouds") {
    haze.style.display = "block";
  } else {
    clouds.style.display = "block";
  }
});

// event control section
btn.addEventListener("click", async () => {
  let subValue = country.value;
  let dataArr = [];
  try {
    dataArr.push(await checkWeather(subValue));
  } catch (e) {
    console.log("err");
  }
  console.log(dataArr);
  temp.innerHTML = parseInt(dataArr[0].main.temp) + "° C";
  humidity.innerHTML = dataArr[0].main.humidity + "%";
  wind.innerHTML = dataArr[0].wind.speed + "km/h";
  if (
    dataArr[0].weather[0].main === "Clouds" ||
    dataArr[0].weather[0].main === "Snow"
  ) {
    haze.style.display = "none";
    clouds.style.display = "block";
  } else {
    clouds.style.display = "none";
    haze.style.display = "block";
  }
});
