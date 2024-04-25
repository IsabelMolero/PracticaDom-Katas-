// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

let printHere = document.querySelector(`[data-function='printHere']`);

let UlPlaces = document.createElement("ul");


for (let i = 0; i < places.length; i++) {
    const place = document.createElement('li');
    UlPlaces.appendChild(place).textContent=places[i];  
}

printHere.appendChild(UlPlaces);

