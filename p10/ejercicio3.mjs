
import { stdin, stdout } from 'process';
import readline from 'readline';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

const ordenarPorLongitud = (palabras) => palabras.sort((a, b) => a.length - b.length);

let palabras = [];

function pedirCantidad() {
  rl.question('¿Cuántas palabras deseas ingresar? ', (cantidad) => {
    let total = parseInt(cantidad);
    pedirPalabra(0, total);
  });
}

function pedirPalabra(indice, total) {
  if (indice >= total) {
    let ordenadas = ordenarPorLongitud([...palabras]);
    console.log('\nPalabras originales:', palabras);
    console.log('Palabras ordenadas por longitud:', ordenadas);
    rl.close();
    return;
  }
  
  rl.question(`Ingresa la palabra ${indice + 1}: `, (palabra) => {
    palabras.push(palabra);
    pedirPalabra(indice + 1, total);
  });
}

pedirCantidad();