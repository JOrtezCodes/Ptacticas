// Parte 1: Calcular promedio con REST PARAMETERS
function calcularPromedioRest(...numeros) {
  if (numeros.length === 0) {
    return 0;
  }
  
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  
  return suma / numeros.length;
}

// Parte 1: Calcular promedio con OBJETO ARGUMENTS
function calcularPromedioArguments() {
  if (arguments.length === 0) {
    return 0;
  }
  
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  
  return suma / arguments.length;
}

console.log("=== COMPARACIÓN: REST vs ARGUMENTS ===\n");

console.log("Con REST PARAMETERS:");
console.log("Promedio de 5, 10, 15:", calcularPromedioRest(5, 10, 15));
console.log("Promedio de 2, 4, 6, 8, 10:", calcularPromedioRest(2, 4, 6, 8, 10));
console.log("Promedio de 100:", calcularPromedioRest(100));

console.log("\nCon OBJETO ARGUMENTS:");
console.log("Promedio de 5, 10, 15:", calcularPromedioArguments(5, 10, 15));
console.log("Promedio de 2, 4, 6, 8, 10:", calcularPromedioArguments(2, 4, 6, 8, 10));
console.log("Promedio de 100:", calcularPromedioArguments(100));

console.log("\n--- VENTAJAS Y DESVENTAJAS ---");
console.log("REST PARAMETERS:");
console.log("✓ Es un array real, puede usar métodos como map, filter, reduce");
console.log("✓ Sintaxis más limpia y moderna");
console.log("✓ Compatible con arrow functions");

console.log("\nOBJETO ARGUMENTS:");
console.log("✓ Disponible en funciones tradicionales antiguas");
console.log("✗ No es un array real, solo array-like");
console.log("✗ No funciona con arrow functions");
console.log("✗ Sintaxis menos clara");

// Parte 2: Función mezclar arrays

function mezclar(...arrays) {
  let resultado = [];
  
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      resultado.push(arrays[i][j]);
    }
  }
  
  return resultado;
}

console.log("\n=== FUNCIÓN MEZCLAR ARRAYS ===\n");

console.log("Mezclar [1, 2], [3], [4, 5]:");
console.log(mezclar([1, 2], [3], [4, 5]));

console.log("\nMezclar [10, 20], [30, 40, 50], [60]:");
console.log(mezclar([10, 20], [30, 40, 50], [60]));

console.log("\nMezclar ['a', 'b'], ['c'], ['d', 'e', 'f']:");
console.log(mezclar(['a', 'b'], ['c'], ['d', 'e', 'f']));

console.log("\nMezclar solo un array [1, 2, 3]:");
console.log(mezclar([1, 2, 3]));

// Parte 3: Contar argumentos con objeto arguments

function contarArgumentos() {
  let cantidad = arguments.length;
  
  console.log(`Se pasaron ${cantidad} argumentos:`);
  
  for (let i = 0; i < arguments.length; i++) {
    console.log(`  Argumento ${i + 1}: ${arguments[i]}`);
  }
  
  return cantidad;
}

console.log("\n=== FUNCIÓN CONTAR ARGUMENTOS ===\n");

contarArgumentos("Hola", "Mundo");
console.log("");

contarArgumentos(10, 20, 30, 40, 50);
console.log("");

contarArgumentos("JavaScript");
console.log("");

contarArgumentos(true, false, null, undefined, 42, "texto");