var map = L.map("map").setView([27.70169, 85.3206], 6);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// var marker = L.marker([27.67, 84.43]).addTo(map);


let popup=document.getElementById('popup')
let realMap=document.querySelector('#map')
window.addEventListener('DOMContentLoaded',()=>{
  realMap.style.display='none'
  popup.style.display='block'

  

})
//layer control
let lati;
let long;


let placeData = L.geoJSON(mapPlace).addTo(map);

const popUp = document.querySelector(".detials");
const mapContainer = document.getElementById("map");
// const selected = document.getElementById("selected");
const navigateBtn = document.getElementById("navigateBtn")
navigateBtn.onclick = ()=>{
  startNavigation()
}

placeData.on("click", function (e) {
  lati = e.latlng.lat;
  long = e.latlng.lng;
  navigateBtn.innerText = "Start Navigation"
  mapContainer.style.width = "70%";
  popUp.style.display = "block";
  const station_title = document.getElementById("title");
  const station_description = document.getElementById("station_description");
  const address = document.getElementById("address");
  const connectivity = document.getElementById("connectivity");
  const charging_level = document.getElementById("charging_level");
  const availibility = document.getElementById("availibility");
  const no_of_cords = document.getElementById("no_of_cords");

// station_title.innerText = e.
console.log(e.layer.feature.properties);
const data = e.layer.feature.properties;
station_title.innerText = data.name
station_description.innerText =  data.description
connectivity.innerText ="Connectivity: " + data.connectivity
charging_level.innerText ="Charging Level: "+ data.charging_level;
availibility.innerText = "Availibility: " + data.availibility;
no_of_cords.innerText ="Number of Cords: " + data.curds
address.innerText  = data.address

  // popUp.style.display = "block";
  // popUp.classList.add("popupAnim");

  // L.tooltip(e.latlng,).addTo(map);
});

function startNavigation() {
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    console.log(coords);
    navigateBtn.innerText='Stop Navigation'
    L.Routing.control({
      waypoints: [
        L.latLng(coords.latitude, coords.longitude),
        L.latLng(lati, long),
      ],
    }).addTo(map);
  });

  console.log(lati, long);
}
