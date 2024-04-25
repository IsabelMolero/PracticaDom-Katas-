// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ulCountries = document.createElement("ul");
document.body.appendChild(ulCountries);

for (let i = 0; i < countries.length; i++) {
    const countrie = document.createElement('li');
    ulCountries.appendChild(countrie).textContent=countries[i];
}

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elemento = document.querySelector(".fn-remove-me");
elemento.remove() ;

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div = document.querySelector(`[data-function='printHere']`);
const ulCars = document.createElement("ul");

for (let i = 0; i < cars.length; i++) {
    const car = document.createElement('li');
    ulCars.appendChild(car).textContent=cars[i];  
}
div.appendChild(ulCars);


// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

 const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];



for (let i = 0; i < countries2.length; i++) {
    //div
    let divCountries = document.createElement("div");
    document.body.appendChild(divCountries);
    //Titulo de cada tarjeta
    let h4Title = document.createElement("h4");
    h4Title.textContent = countries2[i].title;
    divCountries.appendChild(h4Title);
    //Img de cada tarjeta
    let img = document.createElement("img");
    img.src= countries2[i].imgUrl;
    divCountries.appendChild(img);
}


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

let btnRemove = document.createElement('button');
btnRemove.textContent="Eliminar";

let selDiv =  document.querySelectorAll('div');

btnRemove.addEventListener('click', function(){
    if(selDiv.length > 0) {
        selDiv[selDiv.length -1].remove();
        selDiv =  document.querySelectorAll('div');
    }       else {
        alert ('No hay mas elementos para eliminar')
    };    
});

document.body.appendChild(btnRemove);   


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

for (let i = 0; i < countries2.length; i++) {
    //div
    let divCountries = document.createElement("div");
    document.body.appendChild(divCountries);

    //Titulo de cada tarjeta
    let h4Title = document.createElement("h4");
    h4Title.textContent = countries2[i].title;
    divCountries.appendChild(h4Title);

    //Img de cada tarjeta
    let img = document.createElement("img");
    img.src= countries2[i].imgUrl;
    divCountries.appendChild(img);

    //Btn eliminar
    let btnRemoveDiv = document.createElement('button');
    btnRemoveDiv.textContent="Eliminar este Div";
    divCountries.appendChild(btnRemoveDiv);
}

let Btn = document.querySelectorAll('button');

for (let i = 0; i < Btn.length; i++) {
    Btn[i].addEventListener('click', function(){
        Btn[i].parentNode.remove();
    });
}




