// On crée une constante qui va venir stocker l'URL de notre API

async function api(url_api) {

// Ici on viens appeler notre api grace au mot clé fetch qui va nous permettre d'utiliser l'API
fetch("http://api.open-notify.org/iss-now.json")
    .then(response => response.json())
    .then(data => {
        console.log("Résultats complets :", data); 
    
console.log("Message affiché après 10 secondes");
}

const data = await(url_api);
// Ici on défini nos constante pour stocker les données GPS de l'iss qu'on obtient grace à l'api

const iss = data.iss_position;
const latitude = iss.latitude;
const longitude = iss.longitude;


// On viens configurer notre carte ou on va afficher les résultats de l'API
var map = L.map('map').setView([latitude, longitude], 1);
// Affichage de la carte du monde grace au mot clé "map"
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// On crée un marqueur qui sera sur la position actuelle de l'ISS
 L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup('La station spatiale internationale est sur notre marqueur')
    .openPopup();
});


// On va créer une fonction pour réactualiser notre code toutes les 10 secodes
setInterval(iss,10000, " la position actualisée de l'ISS")

//Fin du code