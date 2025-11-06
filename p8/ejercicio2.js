// Declaración de función tradicional
function calcularCuboDeclaracion(numero) {
  return numero * numero * numero;
}

// Expresión de función asignada a una variable
const calcularCuboExpresion = function(numero) {
  return numero * numero * numero;
};

console.log("Declaración de función:", calcularCuboDeclaracion(3));
console.log("Expresión de función:", calcularCuboExpresion(3));

// Función que usa callback anónimo para transformar array
function transformarArray(array, funcionTransformacion) {
  let resultado = [];
  
  for (let i = 0; i < array.length; i++) {
    resultado.push(funcionTransformacion(array[i]));
  }
  
  return resultado;
}

let numeros = [2, 3, 4, 5];

// Usando función anónima como callback
let numerosAlCuadrado = transformarArray(numeros, function(num) {
  return num * num;
});

console.log("\nArray original:", numeros);
console.log("Array transformado (al cuadrado):", numerosAlCuadrado);