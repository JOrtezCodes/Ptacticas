
import { stdin, stdout } from 'process';
import readline from 'readline';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

// Función tradicional
function multiplicar(a, b) {
  return a * b;
}

// Convertida a arrow function
const multiplicarArrow = (a, b) => a * b;

rl.question('Ingresa el primer número: ', (num1) => {
  rl.question('Ingresa el segundo número: ', (num2) => {
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    
    console.log('\nResultado con función tradicional:', multiplicar(a, b));
    console.log('Resultado con arrow function:', multiplicarArrow(a, b));
    
    rl.close();
  });
});