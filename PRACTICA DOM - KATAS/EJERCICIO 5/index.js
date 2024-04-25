// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

let ulAlbums = document.createElement("ul");
document.body.appendChild(ulAlbums);

for (let i = 0; i < albums.length; i++) {
    const album = document.createElement('li');
    ulAlbums.appendChild(album).textContent=albums[i];
}