import { stdin, stdout } from 'process';
import readline from 'readline';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

rl.question('Ingresa un número para calcular su factorial: ', (num) => {
  const numero = parseInt(num);
  
  const factorial = ((n) => {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  })(numero);
  
  console.log(`El factorial de ${numero} es: ${factorial}`);
  rl.close();
});