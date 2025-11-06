// Función recursiva para calcular factorial
function factorial(n) {
  // Caso base: factorial de 0 o 1 es 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Caso recursivo: n! = n * (n-1)!
  return n * factorial(n - 1);
}

// Función recursiva para calcular Fibonacci
function fibonacci(n) {
  // Casos base: los primeros dos números de Fibonacci
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  // Caso recursivo: fib(n) = fib(n-1) + fib(n-2)
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Función recursiva para sumar dígitos
function sumarDigitos(numero) {
  // Caso base: si el número es menor a 10, retorna el mismo número
  if (numero < 10) {
    return numero;
  }
  // Caso recursivo: suma el último dígito + suma del resto
  let ultimoDigito = numero % 10;
  let restoNumero = Math.floor(numero / 10);
  return ultimoDigito + sumarDigitos(restoNumero);
}

// Demostraciones
console.log("Factorial de 5:", factorial(5));
console.log("Factorial de 7:", factorial(7));

console.log("\nSecuencia Fibonacci:");
for (let i = 0; i <= 8; i++) {
  console.log(`Fibonacci(${i}):`, fibonacci(i));
}

console.log("\nSuma de dígitos:");
console.log("Suma de dígitos de 123:", sumarDigitos(123));
console.log("Suma de dígitos de 9876:", sumarDigitos(9876));
console.log("Suma de dígitos de 5:", sumarDigitos(5));