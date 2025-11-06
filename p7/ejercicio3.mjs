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
    pedirLimite();
    return;
  }
  
  rl.question(`Ingresa el número ${indice + 1}: `, (numero) => {
    numeros.push(parseFloat(numero));
    pedirNumero(indice + 1, total);
  });
}

function pedirLimite() {
  rl.question('\n¿Cuál es el número límite? ', (limite) => {
    let valorLimite = parseFloat(limite);
    
    let mayores = numeros.filter((num) => {
      return num > valorLimite;
    });
    
    console.log('\nNúmeros ingresados:', numeros);
    console.log(`Cantidad de números mayores que ${valorLimite}:`, mayores.length);
    console.log('Números mayores:', mayores);
    rl.close();
  });
}

pedirCantidad();