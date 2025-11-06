function sumaRecursiva(array) {
  if (array.length == 0) {
    return 0;
  }
  
  let primerElemento = array[0];
  let restoArray = array.slice(1);
  
  return primerElemento + sumaRecursiva(restoArray);
}

let numeros = [1, 2, 3, 4, 5];
let total = sumaRecursiva(numeros);
console.log("La suma es:", total);