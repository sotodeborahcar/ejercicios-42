// invertirCaso(string)

// Crear una función invertirCaso que tome como argumento un string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

// toUpperCase() => mayusculas
// toLowerCase() => minusculas

// const invertirCaso = (String) => {
//   console.log(String);
//   return String.toUpperCase();
// };
// console.log(invertirCaso("ada lovalace"));

const invertirCaso = (String) => {
  let nuevoString = "";
  for (let i = 0; i < String.length; i++) {
    if (String[i].toUpperCase() === String[i]) {
      nuevoString += String[i].toLowerCase();
      //nuevoString = nuevoString + String[i].toLowerCase()
    } else {
      nuevoString += String[i].toUpperCase();
    }
  }
  return nuevoString;
};

console.log("EJERCICIO");
console.log(invertirCaso("Ada Lovelace")); // 'aDA lOVELACE'
console.log(invertirCaso("feliz cumple")); // 'FELIZ CUMPLE'
console.log(invertirCaso("jAvAsCrIpT")); // 'JaVaScRiPt'

// EJERCITACION OBLIGATORIA

// contiene(numero, numeros)

// Crear una función contiene que tome como argumentos un número y un array de números  y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:
// contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
// contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false

// const contiene = (numero, array) => {
//   if (array.includes(numero)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])); // true
// console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])); // false

const contiene2 = (numero, array) => {
  for (let i = 0; i < array.length; i++) {
    if (numero === array[i]) {
      return true;
    }
  }
  return false;
};

console.log("EJERCICIO");
console.log(contiene2(54, [5, 7, 99, 3, 4, 54, 2, 12])); // true
console.log(contiene2(103, [5, 7, 99, 3, 4, 54, 2, 12])); // false

// gano(tragamonedas)

// Crear una función gano que tome como argumento un array tragamonedas con 5
// símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5
// símbolos, s´ólo debe comparar los 5 primeros.

// gano(['⭐️', '⭐️', '⭐️', '💫', '✨']) // false
// gano(['💫', '💫', '💫', '💫', '💫']) // true
// gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) // true

const gano = (array) => {
  if (
    array[0] === array[1] &&
    array[1] === array[2] &&
    array[2] === array[3] &&
    array[3] === array[4]
  ) {
    return true;
  } else {
    return false;
  }
};

console.log("EJERCICIO");
console.log(gano(["⭐️", "⭐️", "⭐️", "💫", "✨"])); // false
console.log(gano(["💫", "💫", "💫", "💫", "💫"])); // true
console.log(gano(["💫", "💫", "💫", "💫", "💫", "⭐️"])); // true

// estanJuntos(personajes)

// Crear una función estanJuntos que tome como argumento un array de
// strings personajes, y devuelva true si Sam se encuentra al lado de Frodo,
//  ya sea antes o después, o false sino. Ejemplo:

// estanJuntos(['Sam', 'Frodo', 'Legolas']) //true
// estanJuntos(['Aragorn', 'Frodo', 'Frodo']) //true
// estanJuntos(['Sam', 'Orco', 'Frodo']) //true

const estanJuntos = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Sam") {
      if (array[i + 1] === "Frodo" || array[i - 1] === "Frodo") {
        // con [i+1] o [i-1] consigo un array antes o despues
        return true;
      }
    }
  }
  return false;
};

console.log("EJERCICIO");
console.log(estanJuntos(["Sam", "Frodo", "Legolas"])); //true
console.log(estanJuntos(["Aragorn", "Frodo", "Frodo"])); //false
console.log(estanJuntos(["Sam", "Orco", "Frodo"])); //false
