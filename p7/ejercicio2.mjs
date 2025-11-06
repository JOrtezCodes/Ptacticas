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
    let suma = numeros.reduce((acumulador, num) => {
      return acumulador + num;
    }, 0);
    
    console.log('\nNúmeros ingresados:', numeros);
    console.log('La suma total es:', suma);
    rl.close();
    return;
  }
  
  rl.question(`Ingresa el número ${indice + 1}: `, (numero) => {
    numeros.push(parseFloat(numero));
    pedirNumero(indice + 1, total);
  });
}

pedirCantidad();