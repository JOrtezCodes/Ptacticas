import { stdin, stdout } from 'process';
import readline from 'readline';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

let nombres = [];

function pedirCantidad() {
  rl.question('¿Cuántos nombres deseas ingresar? ', (cantidad) => {
    let total = parseInt(cantidad);
    pedirNombre(0, total);
  });
}

function pedirNombre(indice, total) {
  if (indice >= total) {
    buscarNombre();
    return;
  }
  
  rl.question(`Ingresa el nombre ${indice + 1}: `, (nombre) => {
    nombres.push(nombre);
    pedirNombre(indice + 1, total);
  });
}

function buscarNombre() {
  rl.question('\n¿Qué nombre deseas buscar? ', (nombreBuscar) => {
    let encontrado = nombres.find((nombre) => {
      return nombre.toLowerCase() === nombreBuscar.toLowerCase();
    });
    
    console.log('\nNombres en el array:', nombres);
    
    if (encontrado) {
      console.log(`El nombre "${nombreBuscar}" SÍ existe en el array`);
    } else {
      console.log(`El nombre "${nombreBuscar}" NO existe en el array`);
    }
    
    rl.close();
  });
}

pedirCantidad();