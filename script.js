var map = L.map("map").setView([27.70169, 85.3206], 6);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// var marker = L.marker([27.67, 84.43]).addTo(map);

//layer control
let lati;
let long;

// navigator.geolocation.getCurrentPosition(function (position) {
//   console.log(position);
//   console.log(position.coords.latitude, position.coords.longitude);

//   lat = position.coords.latitude
//   lon = position.coords.longitude
//   L.marker([lat, lon]).addTo(map)
// })

// L.flyTo([27.70169, 85.3206],10, {
//   animate: true,
//   duration: 3
// }).addTo(map)

// L.Routing.control({
//   waypoints: [
//     L.latLng(57.74, 11.94),
//     L.latLng(57.6792, 11.949)
//   ]
// }).addTo(map);

// L.marker([27.70169, 85.3206]).on('click', function() {
//   console.log('add');
// });

// map.on("click", function(e){
//   new L.Marker([e.latlng.lat, e.latlng.lng]).addTo(map)

//   navigator.geolocation.getCurrentPosition(function(position){
//     lat = position.coords.latitude
//     lon = position.coords.longitude
//   })

//   L.Routing.control({
//     waypoints: [
//       L.latLng(e.latlng.lat,e.latlng.lng),
//       L.latLng(lat, lon)
//     ]
//   }).addTo(map);
// })

let placeData = L.geoJSON(mapPlace).addTo(map);

const popUp = document.querySelector(".popup");
const selected = document.getElementById("selected");
placeData.on("click", function (e) {
  lati = e.latlng.lat;
  long = e.latlng.lng;

  // popUp.style.display = "block";
  popUp.classList.add("popupAnim");

  // L.tooltip(e.latlng,).addTo(map);
});

function startNavigation() {
  console.log("ljk");
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    console.log(coords);
    L.Routing.control({
      waypoints: [
        L.latLng(coords.latitude, coords.longitude),

        L.latLng(lati, long),
      ],
    }).addTo(map);
  });

  console.log(lati, long);
}
