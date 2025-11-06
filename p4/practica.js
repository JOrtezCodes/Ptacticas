let empleados = [];

function registrarEmpleado(nombre, edad, departamento, salario) {
    const empleado = {
        nombre: nombre,
        edad: edad,
        departamento: departamento,
        salario: salario
    };
    
    empleados.push(empleado);
    console.log(`✓ Empleado ${nombre} registrado exitosamente`);
    return empleado;
}

function mostrarEmpleados() {
    if (empleados.length === 0) {
        console.log("No hay empleados registrados.");
        return;
    }
    
    console.log("\n=== LISTA DE EMPLEADOS ===");
    empleados.forEach((empleado, index) => {
        console.log(`\nEmpleado #${index + 1}:`);
        console.log(`  Nombre: ${empleado.nombre}`);
        console.log(`  Edad: ${empleado.edad} años`);
        console.log(`  Departamento: ${empleado.departamento}`);
        console.log(`  Salario: $${empleado.salario.toFixed(2)}`);
    });
    console.log("==========================\n");
}

function buscarEmpleadoPorNombre(nombre) {
    const empleadoEncontrado = empleados.find(
        emp => emp.nombre.toLowerCase() === nombre.toLowerCase()
    );
    
    if (empleadoEncontrado) {
        console.log("\n=== EMPLEADO ENCONTRADO ===");
        console.log(`  Nombre: ${empleadoEncontrado.nombre}`);
        console.log(`  Edad: ${empleadoEncontrado.edad} años`);
        console.log(`  Departamento: ${empleadoEncontrado.departamento}`);
        console.log(`  Salario: $${empleadoEncontrado.salario.toFixed(2)}`);
        console.log("===========================\n");
        return empleadoEncontrado;
    } else {
        console.log(`\n✗ No se encontró ningún empleado con el nombre: ${nombre}\n`);
        return null;
    }
}

function calcularSalarioPromedio() {
    if (empleados.length === 0) {
        console.log("No hay empleados para calcular el promedio.");
        return 0;
    }
    
    const sumaTotal = empleados.reduce((suma, empleado) => suma + empleado.salario, 0);
    const promedio = sumaTotal / empleados.length;
    
    console.log(`\n=== SALARIO PROMEDIO ===`);
    console.log(`Total de empleados: ${empleados.length}`);
    console.log(`Salario promedio: $${promedio.toFixed(2)}`);
    console.log("========================\n");
    
    return promedio;
}

console.log("=== SISTEMA DE REGISTRO DE EMPLEADOS ===\n");

registrarEmpleado("Carlos Méndez", 28, "Desarrollo", 1200.00);
registrarEmpleado("María González", 32, "Recursos Humanos", 1000.00);
registrarEmpleado("José Ramírez", 25, "Marketing", 950.00);
registrarEmpleado("Ana López", 30, "Desarrollo", 1300.00);
registrarEmpleado("Pedro Hernández", 35, "Ventas", 1100.00);

mostrarEmpleados();

buscarEmpleadoPorNombre("María González");
buscarEmpleadoPorNombre("Juan Pérez");

calcularSalarioPromedio();