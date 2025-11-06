function operacion(num1, num2, callback) {
  let resultado = callback(num1, num2);
  console.log("Resultado:", resultado);
}

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

operacion(8, 4, sumar);
operacion(8, 4, restar);
operacion(8, 4, multiplicar);