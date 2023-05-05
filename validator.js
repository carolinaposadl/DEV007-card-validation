const validator = {
  isValid: function (creditCardNumber) {
    const validValue = creditCardNumber.split(""); // transformando string en array
    const reversedValue = validValue.reverse(); // revertiendo el array (índices)
    console.log(reversedValue);
    let sum = 0; // declarando variable "sum" para la suma final del array, si el resultado es multiplo de 10, "sum" será igual a 0

    for (let i = 0; i < reversedValue.length; i++) { //for declara i y se inicializa con el índice 0 - for es un ciclo que recorre el array
      if (((i + 1) % 2) === 0) // identificando las posiciones pares del array - el residual de la posición debe ser igual a 0 para determinar si es par
      {
        reversedValue[i] = parseInt(reversedValue[i]) * 2 // multiplicando el valor del índice * 2 si la posición es par - parseando un texto a number 
        console.log(reversedValue[i])
        if (reversedValue[i] >= 10) // identificando si el resultado de la multiplicación es mayor o igual a 10
        {
          //tomando el residuo del número y sumándolo a la parte entera - Math.floor permite devolver la parte entera de un número
          reversedValue[i] = reversedValue[i] % 10 + Math.floor(reversedValue[i] / 10);
          sum = sum + parseInt(reversedValue[i]); //sumando los números del array >=10
        } else {
          sum = sum + parseInt(reversedValue[i]); //sumando los demás números del array
        }
      } else {
        sum = sum + parseInt(reversedValue[i]);
      }
    }
    //creando una condición para verificar la validez del número y la longitud del número ingresado
    if (sum % 10 === 0 && creditCardNumber.length !== 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: function (creditCardNumber) {
    for (let i = 0; i < creditCardNumber.length; i++) {
      return creditCardNumber.slice(0, -4).replace(/./g, "#") + creditCardNumber.slice(-4);
    }
  }

}

export default validator;

//














//PASOS
//Obtener la reversa del número a verificar .split
//Transformar el input de string a array
//Identificar las posiciones pares del array
//Multiplicar *2 los números que ocupan una posición par
//Sumar los dígitos si el resultado de la multiplicación es >= 10
//Sumar los números impares
//Sumar todos los números del array
//Verificar si el resultado de la suma total es un número múltiplo de 10, if (true)
//Verificar si no es múltiplo de 10, else (false)