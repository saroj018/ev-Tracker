var map = L.map("map").setView([27.67, 84.43], 11);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// var marker = L.marker([27.67, 84.43]).addTo(map);

//layer control

navigator.geolocation.watchPosition(success, error);

function success(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  const accuracy = pos.coords.accuracy;
  L.marker([lat, lng]).addTo(map);
  L.circle([lat, lng], { radius: accuracy }).addTo(map);
  console.log("Success");
}
function error() {
  console.log("Error");
}
//circle
// var circle = L.circle([51.508, -0.11], {
//   color: "red",
//   fillColor: "#f03",
//   fillOpacity: 0.5,
//   radius: 500,
// }).addTo(map);
