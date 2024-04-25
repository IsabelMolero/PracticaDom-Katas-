// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

let btnToClick = document.createElement('button');
btnToClick.id = "btnToClick";
btnToClick.textContent="Info Evento";

document.body.appendChild(btnToClick);

btnToClick.addEventListener('click', function(event){
  console.log("Informacion del evento click:", event);   
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let inputFocus = document.querySelectorAll('input');

for (let i = 0; i < inputFocus.length; i++) {
    inputFocus[i].addEventListener('focus', function(event){
        let valorInput = event.target.value;
        console.log("Informacion del input:", valorInput);
    });
}


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

for (let i = 0; i < inputFocus.length; i++) {
    inputFocus[i].addEventListener('input', function(event){
        let valorInput2 = event.target.value;
        console.log("Informacion del input:", valorInput2);
    });
}