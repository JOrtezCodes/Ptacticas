import { stdin, stdout } from 'process';
import readline from 'readline';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

let empleados = [];

function registrarEmpleado() {
  rl.question('Nombre: ', (nombre) => {
    rl.question('Edad: ', (edad) => {
      rl.question('Departamento: ', (departamento) => {
        rl.question('Salario: ', (salario) => {
          const empleado = {
            nombre: nombre,
            edad: parseInt(edad),
            departamento: departamento,
            salario: parseFloat(salario)
          };
          
          empleados.push(empleado);
          console.log('\n✓ Empleado registrado exitosamente\n');
          mostrarMenu();
        });
      });
    });
  });
}

function mostrarEmpleados() {
  if (empleados.length === 0) {
    console.log('\nNo hay empleados registrados.\n');
  } else {
    console.log('\n=== LISTA DE EMPLEADOS ===');
    empleados.forEach((emp, index) => {
      console.log(`${index + 1}. Nombre: ${emp.nombre} | Edad: ${emp.edad} | Departamento: ${emp.departamento} | Salario: $${emp.salario}`);
    });
    console.log('');
  }
  mostrarMenu();
}

function buscarEmpleado() {
  rl.question('Ingrese el nombre del empleado a buscar: ', (nombre) => {
    const empleado = empleados.find(emp => emp.nombre.toLowerCase() === nombre.toLowerCase());
    
    if (empleado) {
      console.log('\n=== EMPLEADO ENCONTRADO ===');
      console.log(`Nombre: ${empleado.nombre}`);
      console.log(`Edad: ${empleado.edad}`);
      console.log(`Departamento: ${empleado.departamento}`);
      console.log(`Salario: $${empleado.salario}\n`);
    } else {
      console.log('\nEmpleado no encontrado.\n');
    }
    
    mostrarMenu();
  });
}

function calcularSalarioPromedio() {
  if (empleados.length === 0) {
    console.log('\nNo hay empleados para calcular el promedio.\n');
  } else {
    const totalSalarios = empleados.reduce((total, emp) => total + emp.salario, 0);
    const promedio = totalSalarios / empleados.length;
    console.log(`\nSalario promedio: $${promedio.toFixed(2)}\n`);
  }
  mostrarMenu();
}

function mostrarMenu() {
  console.log('=== REGISTRO DE EMPLEADOS ===');
  console.log('1. Registrar empleado');
  console.log('2. Mostrar todos los empleados');
  console.log('3. Buscar empleado por nombre');
  console.log('4. Calcular salario promedio');
  console.log('5. Salir');
  
  rl.question('\nSeleccione una opción: ', (opcion) => {
    switch(opcion) {
      case '1':
        registrarEmpleado();
        break;
      case '2':
        mostrarEmpleados();
        break;
      case '3':
        buscarEmpleado();
        break;
      case '4':
        calcularSalarioPromedio();
        break;
      case '5':
        console.log('Saliendo del sistema...');
        rl.close();
        break;
      default:
        console.log('\nOpción inválida\n');
        mostrarMenu();
    }
  });
}

mostrarMenu();