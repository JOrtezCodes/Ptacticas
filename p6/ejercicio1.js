function crearAcumulador() {
  let total = 0;
  
  return function(numero) {
    total = total + numero;
    console.log("Total acumulado:", total);
    return total;
  }
}

let suma = crearAcumulador();
suma(5);
suma(2);
suma(6);