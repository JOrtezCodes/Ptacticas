function crearContador() {
  let contador = 0;
  
  return {
    incrementar: function() {
      contador++;
      console.log("Contador incrementado:", contador);
      return contador;
    },
    decrementar: function() {
      contador--;
      console.log("Contador decrementado:", contador);
      return contador;
    },
    obtenerValor: function() {
      return contador;
    }
  };
}

console.log("=== PRUEBA DE CLOSURES ===\n");

let contadorA = crearContador();
let contadorB = crearContador();

console.log("Contador A:");
contadorA.incrementar();
contadorA.incrementar();
contadorA.incrementar();
console.log("Valor actual de A:", contadorA.obtenerValor());

console.log("\nContador B:");
contadorB.incrementar();
contadorB.decrementar();
console.log("Valor actual de B:", contadorB.obtenerValor());

console.log("\nComprobando independencia:");
console.log("Contador A sigue con:", contadorA.obtenerValor());
console.log("Contador B sigue con:", contadorB.obtenerValor());