// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

 const nuevoDiv = document.createElement("div"); 
 let cuerpo = document.querySelector("body");
 cuerpo.appendChild(nuevoDiv);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const nuevaP = document.createElement("p");
nuevoDiv.appendChild(nuevaP);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.

const div6 = document.createElement("div");
let cuerpo2 = document.querySelector("body");
cuerpo.appendChild(div6);

for (let i = 0; i < 6; i++) {
    const parrafo = document.createElement("p");
    div6.appendChild(parrafo);
}

// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.

const nuevaP2 = document.createElement("p");
nuevoDiv.appendChild(nuevaP2);
nuevaP2.textContent = "Soy dinámico!";


// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";


// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ulApss = document.createElement("ul");
cuerpo.appendChild(ulApss);

for (let i = 0; i < apps.length; i++) {
    const app = document.createElement('li');
    ulApss.appendChild(app).textContent=apps[i];
}

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let eliminame = document.querySelectorAll(".fn-remove-me");

for (let i = 0; i < eliminame.length; i++) {
    eliminame[i].remove();  
}


// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

let div1 = document.querySelectorAll("div.fn-insert-here");

let div2 = div1[1];

let miP = document.createElement("p");
miP.textContent="Voy en medio!";

div2.parentNode.insertBefore(miP, div2);


// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let divInsert = document.querySelectorAll("div.fn-insert-here");

for (let i = 0; i < divInsert.length; i++) {
    let parrafo2 = document.createElement("p");
    parrafo2.textContent = "Voy dentro!";
    divInsert[i].appendChild(parrafo2); 
}

