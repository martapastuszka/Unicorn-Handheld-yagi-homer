//leaflet operations

var mymap = L.map('mapid').setView([51.753897, 19.538668], 13);

var marker = L.marker([51.753897, 19.538668]).addTo(mymap);

var marker2 = L.marker([54.100034, 17.980939]).addTo(mymap);

var polygon = L.polygon([
    [51.753897, 19.538668],
    [54.100034, 17.980939],
]).addTo(mymap);
  
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


//Balloon List

// let myLocation = {
//     'lat' : 51.753897, 
//     'long': 19.538668,
// }

let balloon = [
    {
        'id': 'Koscierzyna',
        "lat": 54.100034,
        'long': 17.980939,
    },

    {
        'id': 'Kopaniec',
        "lat": 50.889753,
        'long': 15.546763,
    },

    {
        'id': 'Olsztyn',
        "lat": 50.740266, 
        'long': 19.270153,
    },

]
console.log(balloon[1].id);

// document.querySelector('wrapper');
// let balloonList = document.createElement('div')
// balloonList.textContent = `${balloon[0].id}, ${balloon[0].lat}, ${balloon[0].long}`;
// wrapper.appendChild(balloonList);

//"find" button operations

let findButton = document.querySelector(".btn-find")
let testMsg = document.querySelector('#message')

findButton.addEventListener('click', ()=>{
    testMsg.classList.toggle('reveal');
  })