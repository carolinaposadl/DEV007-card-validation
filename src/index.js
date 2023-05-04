import validator from './validator.js';

// obteniendo elementos del DOM
const input = document.getElementById("creditCardNumber"); // obteniendo el input donde se ingresa el número de tarjeta desde index.html
const validButton = document.getElementById("bottonValidar"); // obteniendo el botón "Validar" desde index.html

// ejecutando eventos del DOM
validButton.addEventListener('click', () => {
  console.log(validator.isValid(input.value));
  // creando alert para ejecutar método en la interfaz
  if (validator.isValid(input.value) === true) {
    alert("Tarjeta válida " + validator.maskify(input.value));
  } else {
    alert("Tarjeta inválida");
  }

  console.log(validator);
});