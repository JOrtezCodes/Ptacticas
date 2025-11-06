// Función que crea un contador con métodos privados
function crearContador() {
  // Variable privada (solo accesible dentro del closure)
  let contador = 0;
  
  // Retorna un objeto con métodos que acceden a la variable privada
  return {
    incrementar: function() {
      contador++;
      return contador;
    },
    decrementar: function() {
      contador--;
      return contador;
    },
    obtenerValor: function() {
      return contador;
    }
  };
}

// Crear múltiples contadores independientes
let contador1 = crearContador();
let contador2 = crearContador();

console.log("Contador 1 - Incrementar:", contador1.incrementar());
console.log("Contador 1 - Incrementar:", contador1.incrementar());
console.log("Contador 1 - Incrementar:", contador1.incrementar());
console.log("Contador 1 - Valor actual:", contador1.obtenerValor());

console.log("\nContador 2 - Incrementar:", contador2.incrementar());
console.log("Contador 2 - Decrementar:", contador2.decrementar());
console.log("Contador 2 - Valor actual:", contador2.obtenerValor());

console.log("\nContador 1 mantiene su valor:", contador1.obtenerValor());