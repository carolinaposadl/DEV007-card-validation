import validator from './validator.js';

// obteniendo los elementos del DOM
const input = document.getElementById("creditCardNumber"); // obtener el input donde se ingresa el número de tarjeta desde index.html
const validButton = document.getElementById("bottonValidar"); // obtener el botón Validar desde index.html

// ejecutando eventos del DOM
validButton.addEventListener('click', () => {
  validator.isValid(input.value); // ejecutando método isValid al dar click 
  validator.maskify(input.value); // ejecutando método maskify al dar click

  // creando alert para ejecutar método en la interfaz
  if (validator.isValid("creditCardNumber") === true) {
    alert("Tarjeta válida");
  } else {
    alert("Tarjeta inválida");
  }

  //ejecutando maskify en la interfaz
  (validator.maskify("creditCardNumber"));

  console.log(validator);
});


//traer el boolean de validator acá
//si el resultado de la suma es multiplo de 10, entonces es true (la parte lógica iría en validator), de lo contrario es false
//debo traer variable suma acá, como: validator.suma, quizá ()
//pero además debo crear un alert desde acá que para un caso indique "Tarjeta válida" (true), o "Tarjeta inválida" (false)


//APUNTES
//toda la manipulación del html lo hago de mi index.js
///en este archivo queremos llamar la función que está en validator.js