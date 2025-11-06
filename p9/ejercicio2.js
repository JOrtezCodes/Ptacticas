function crearPerfil(nombre, edad = 18, ciudad = "No especificada", profesion = "Estudiante") {
  let perfil = {
    nombre: nombre,
    edad: edad,
    ciudad: ciudad,
    profesion: profesion
  };
  
  return perfil;
}

console.log("=== PRUEBAS DE PARÁMETROS POR DEFECTO ===\n");

console.log("1. Todos los parámetros especificados:");
console.log(crearPerfil("Roberto", 28, "San Salvador", "Desarrollador"));

console.log("\n2. Solo nombre (todos los demás por defecto):");
console.log(crearPerfil("María"));

console.log("\n3. Nombre y edad:");
console.log(crearPerfil("José", 35));

console.log("\n4. Nombre, edad y ciudad:");
console.log(crearPerfil("Carmen", 22, "Santa Ana"));

console.log("\n5. Nombre y profesión (usando undefined para saltar parámetros):");
console.log(crearPerfil("Luis", undefined, undefined, "Médico"));

console.log("\n6. Otro ejemplo saltando parámetros:");
console.log(crearPerfil("Ana", 19, "La Libertad"));