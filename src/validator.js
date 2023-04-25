const validator = {
  isValid: function (creditCardNumber) {
    const validValue = creditCardNumber.split(""); // transformando string en array
    const reversedValue = validValue.reverse(); // revertir el array (ahora hay índices)
    console.log(reversedValue);
    let sum = 0; // declarando variable suma para la suma final del array, si el resultado es multiplo de 10, suma será igual a 0

    for (let i = 0; i < reversedValue.length; i++) { //for declara i y se inicializa con el índice 0 - for es un ciclo que recorre el array
      if (((i + 1) % 2) === 0) // identificando las posiciones pares del array - el residual de la posición debe ser igual a 0 para determinar si es par
      {
        reversedValue[i] = parseInt(reversedValue[i]) * 2 // multiplicando el valor del índice * 2, si la posición es par - parseando un texto a number 
        console.log(reversedValue[i])
        if (reversedValue[i] >= 10) // identificando si el resultado de la multiplicación es mayor o igual a 10
        {
          //sacando el residuo del número y sumándolo a la parte entera - el Math.floor permite devolver la parte entera de un número
          reversedValue[i] = reversedValue[i] % 10 + Math.floor(reversedValue[i] / 10);
        }
        sum = sum + parseInt(reversedValue[i]); // sumando los valores del array
      }
      if (sum % 10 === 0) {
        return true;
      } else {
        return false;
      }
    }
  },

  maskify: function (creditCardNumber) {
    for (let i = 0; i < creditCardNumber.length; i++) {
      return creditCardNumber.slice(0, -4).replace(/./g, "#") + creditCardNumber.slice(-4);
    }
  }

}

export default validator;



//Preguntas:
// ¿eslint es la herramienta que me permite leer los errores en el código?



//PASOS:
//Obtener la reversa del número a verificar .split
//Transformando el input de string a array
//Identificar las posiciones pares del array
//a todos los números que ocupan una posición par se les debe multiplicar por dos
//si el resultado de la multiplicación es mayor o igual a 10
//se deben sumar los digitos
//finalmente sumar todos los números del array
// el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10. (alert) if
//si no es invalida (alert) else
//-> //hacer una división entre 10 - obtener el residual!!!!!! debe dar 0 (true), lo contrario es (false)

//enviar el resultado a index.js - conectado a través del botón (?)


//4083952015263


//apuntes:
//utilizar: funciones, variables, condiciones, ciclo for, objetos(métodos)
//isValid(aqui va el input, pq es lo recibirá para poder analizarlo, ->
//esta es una variable que se nombra, va a recibir algo del otro script)
//lo que está en parentesis "vacio" es un parametro, el paremtro es la declaración de la variable


//validator.isValid()
//validator.maskify()

// GUÍA:
//const recibirMensaje = {
//mensajeDelIndex(msj) {
//alert('Mensaje recibido: ' + msj)
//}
//};
//export default recibirMensaje;


