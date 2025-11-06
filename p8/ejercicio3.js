// Función principal que procesa un array
function procesarArray(array, funcionProcesamiento) {
  let resultado = [];
  
  for (let i = 0; i < array.length; i++) {
    resultado.push(funcionProcesamiento(array[i]));
  }
  
  return resultado;
}

// Diferentes funciones de procesamiento
function duplicar(numero) {
  return numero * 2;
}

function elevarAlCuadrado(numero) {
  return numero * numero;
}

function calcularRaizCuadrada(numero) {
  return Math.sqrt(numero);
}

// Demostraciones
let numeros = [4, 9, 16, 25];

console.log("Array original:", numeros);
console.log("Duplicados:", procesarArray(numeros, duplicar));
console.log("Al cuadrado:", procesarArray(numeros, elevarAlCuadrado));
console.log("Raíz cuadrada:", procesarArray(numeros, calcularRaizCuadrada));