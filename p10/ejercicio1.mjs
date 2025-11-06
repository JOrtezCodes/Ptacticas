import { stdin, stdout } from 'process';
import readline from 'readline';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

const filtrarPares = (numeros) => numeros.filter(num => num % 2 === 0);

let numeros = [];

function pedirCantidad() {
  rl.question('¿Cuántos números deseas ingresar? ', (cantidad) => {
    let total = parseInt(cantidad);
    pedirNumero(0, total);
  });
}

function pedirNumero(indice, total) {
  if (indice >= total) {
    let pares = filtrarPares(numeros);
    console.log('\nArray original:', numeros);
    console.log('Números pares:', pares);
    rl.close();
    return;
  }
  
  rl.question(`Ingresa el número ${indice + 1}: `, (num) => {
    numeros.push(parseInt(num));
    pedirNumero(indice + 1, total);
  });
}

pedirCantidad();