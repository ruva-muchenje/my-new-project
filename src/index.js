function refreshweather(rensponse) {
    console.log(response.data);
}

function searchCity(city){
    let apiKey = "ea85029e8b68d4f3f0a195t3ob3f527a";
    let apiUrl = "https://api.shecodes.io/weather/v1/current?query=$(city)&key=${apiKey}&unit=metric";
    axios.get(apiUrl).then(refreshweather);
}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");


    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
  }
  
  let searchFormElement = document.querySelector("#search-form");
  searchFormElement.addEventListener("submit", handleSearchSubmit);