
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// function btnSearchLocation(){
//   const searchLocation = $("#txtLocation");
//   console.log(searchLocation.val());
// }

//----------------------------------------------------------

function getLocation() {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

}
const successCallback = (position) => {
  console.log(position);
  setLocationInMap(position.coords.latitude, position.coords.longitude);
  // getWeatherForecast(position.coords.latitude, position.coords.longitude);
};

const errorCallback = (error) => {
  console.log(error);
};

getLocation();
function btnSearchLocation() {

  const currentLocationName = $("#currentLocation");
  $.ajax({
    method: "GET",
    url: " http://api.weatherapi.com/v1/current.json?key=9125f2db5bc2423d82395047232809&q=Colombo",
    success: (resp) => {
      console.log("Latitude :", resp.location.lat);
      console.log("Longitude :", resp.location.lon);
      setLocationInMap(resp.location.lat, resp.location.lon)
      currentLocationName.text(resp.location.name);
    }
  });
}

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

function setLocationInMap(lng, ltd) {

  marker.setLatLng([lng, ltd]).update;
  map.setView([lng, ltd], 13);
}
//---------------------------------------------------------------

