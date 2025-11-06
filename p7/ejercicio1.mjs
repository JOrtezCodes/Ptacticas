import { stdin, stdout } from 'process';
import readline from 'readline';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

let productos = [];

function pedirCantidad() {
  rl.question('¿Cuántos productos deseas ingresar? ', (cantidad) => {
    let total = parseInt(cantidad);
    agregarProducto(0, total);
  });
}

function agregarProducto(indice, total) {
  if (indice >= total) {
    console.log('\nArray completo de productos:');
    console.log(productos);
    rl.close();
    return;
  }
  
  rl.question(`\nIngresa el nombre del producto ${indice + 1}: `, (nombre) => {
    rl.question(`Ingresa el precio del producto ${indice + 1}: `, (precio) => {
      let producto = {
        nombre: nombre,
        precio: parseFloat(precio)
      };
      
      productos.push(producto);
      agregarProducto(indice + 1, total);
    });
  });
}

pedirCantidad();