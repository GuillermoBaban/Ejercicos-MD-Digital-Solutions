const URL = "http://api.weatherstack.com/current?";

let bsas = new URLSearchParams({
  access_key: "",
  query: "Buenos Aires",
});

let ny = new URLSearchParams({
  access_key: "",
  query: "New York",
});

let tokyo = new URLSearchParams({
  access_key: "",
  query: "Tokyo",
});

fetch(URL + bsas)
  .then((res) => res.json()) //hago promesa, el sv me da una respuesta y lo convierto en json
  .then((data) => {
    //data es el resultado de la promesa res, hago otra promesa para pintar en html
    let hBsAs = document.querySelector("#hBsAs");
    let tBsAs = document.querySelector("#tBsAs");
    let vBsAs = document.querySelector("#vBsAs");
    hBsAs.innerHTML = data.current.humidity;
    tBsAs.innerHTML = data.current.temperature;
    vBsAs.innerHTML = data.current.wind_speed;
  });

fetch(URL + ny)
  .then((res) => res.json())
  .then((data) => {
    let hNY = document.querySelector("#hNY");
    let tNY = document.querySelector("#tNY");
    let vNY = document.querySelector("#vNY");
    hNY.innerHTML = data.current.humidity;
    tNY.innerHTML = data.current.temperature;
    vNY.innerHTML = data.current.wind_speed;
  });

fetch(URL + tokyo)
  .then((res) => res.json())
  .then((data) => {
    let hTKO = document.querySelector("#hTKO");
    let tTKO = document.querySelector("#tTKO");
    let vTKO = document.querySelector("#vTKO");
    hTKO.innerHTML = data.current.humidity;
    tTKO.innerHTML = data.current.temperature;
    vTKO.innerHTML = data.current.wind_speed;
  });
