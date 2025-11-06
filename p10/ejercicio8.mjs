import { stdin, stdout } from 'process';
import readline from 'readline';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

function crearGestorTareas() {
  let tareas = [];
  let contadorId = 1;
  
  function agregarTarea(descripcion) {
    let nuevaTarea = {
      id: contadorId++,
      descripcion: descripcion,
      completada: false
    };
    
    tareas.push(nuevaTarea);
    console.log(`✓ Tarea agregada: "${descripcion}" (ID: ${nuevaTarea.id})`);
    return nuevaTarea;
  }
  
  function completarTarea(id) {
    let tarea = tareas.find(t => t.id === id);
    
    if (tarea) {
      tarea.completada = true;
      console.log(`✓ Tarea ${id} completada: "${tarea.descripcion}"`);
      return true;
    } else {
      console.log(`✗ No se encontró tarea con ID ${id}`);
      return false;
    }
  }
  
  function listarPendientes() {
    let pendientes = tareas.filter(t => !t.completada);
    
    console.log('\n=== TAREAS PENDIENTES ===');
    if (pendientes.length === 0) {
      console.log('No hay tareas pendientes');
    } else {
      pendientes.forEach(t => {
        console.log(`[${t.id}] ${t.descripcion}`);
      });
    }
    
    return pendientes;
  }
  
  function contarTareas() {
    let total = tareas.length;
    let completadas = tareas.filter(t => t.completada).length;
    let pendientes = tareas.filter(t => !t.completada).length;
    
    let estadisticas = {
      total: total,
      completadas: completadas,
      pendientes: pendientes
    };
    
    console.log('\n=== ESTADÍSTICAS ===');
    console.log(`Total: ${total}`);
    console.log(`Completadas: ${completadas}`);
    console.log(`Pendientes: ${pendientes}`);
    
    return estadisticas;
  }
  
  return {
    agregarTarea: agregarTarea,
    completarTarea: completarTarea,
    listarPendientes: listarPendientes,
    contarTareas: contarTareas
  };
}

let gestor = crearGestorTareas();

function mostrarMenu() {
  console.log('\n=== GESTOR DE TAREAS ===');
  console.log('1. Agregar tarea');
  console.log('2. Completar tarea');
  console.log('3. Listar pendientes');
  console.log('4. Contar tareas');
  console.log('5. Salir');
  
  rl.question('\nSelecciona opción: ', (opcion) => {
    if (opcion === '1') {
      rl.question('Descripción de la tarea: ', (desc) => {
        gestor.agregarTarea(desc);
        mostrarMenu();
      });
    } else if (opcion === '2') {
      rl.question('ID de la tarea: ', (id) => {
        gestor.completarTarea(parseInt(id));
        mostrarMenu();
      });
    } else if (opcion === '3') {
      gestor.listarPendientes();
      mostrarMenu();
    } else if (opcion === '4') {
      gestor.contarTareas();
      mostrarMenu();
    } else if (opcion === '5') {
      console.log('Saliendo...');
      rl.close();
    } else {
      console.log('Opción inválida');
      mostrarMenu();
    }
  });
}

mostrarMenu();