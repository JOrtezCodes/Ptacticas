import { stdin, stdout } from 'process';
import readline from 'readline';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

let numeros = [];

function pedirCantidad() {
  rl.question('¿Cuántos números deseas ingresar? ', (cantidad) => {
    let total = parseInt(cantidad);
    pedirNumero(0, total);
  });
}

function pedirNumero(indice, total) {
  if (indice >= total) {
    eliminarRepetidos();
    return;
  }
  
  rl.question(`Ingresa el número ${indice + 1}: `, (numero) => {
    numeros.push(parseFloat(numero));
    pedirNumero(indice + 1, total);
  });
}

function eliminarRepetidos() {
  let numerosUnicos = numeros.filter((num, indice) => {
    return numeros.indexOf(num) === indice;
  });
  
  console.log('\nArray original:', numeros);
  console.log('Array sin repetidos:', numerosUnicos);
  rl.close();
}

pedirCantidad();