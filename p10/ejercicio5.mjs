const contador = (() => {
  let valor = 0;
  
  return {
    incrementar: function() {
      valor++;
      return valor;
    },
    obtenerValor: function() {
      return valor;
    }
  };
})();

console.log('Valor inicial:', contador.obtenerValor());
console.log('Incrementar:', contador.incrementar());
console.log('Incrementar:', contador.incrementar());
console.log('Incrementar:', contador.incrementar());
console.log('Valor actual:', contador.obtenerValor());