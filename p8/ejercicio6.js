function crearPerfil(nombre, edad = 18, ciudad = "No especificada", profesion = "Estudiante") {
  let perfil = {
    nombre: nombre,
    edad: edad,
    ciudad: ciudad,
    profesion: profesion
  };
  
  return perfil;
}

// Diferentes formas de llamar la función
console.log("Perfil 1 - Todos los parámetros:");
console.log(crearPerfil("Juan", 25, "San Salvador", "Ingeniero"));

console.log("\nPerfil 2 - Solo nombre:");
console.log(crearPerfil("María"));

console.log("\nPerfil 3 - Nombre y edad:");
console.log(crearPerfil("Pedro", 30));

console.log("\nPerfil 4 - Nombre, edad y ciudad:");
console.log(crearPerfil("Ana", 22, "Guatemala"));

console.log("\nPerfil 5 - Omitiendo parámetros intermedios:");
console.log(crearPerfil("Carlos", undefined, "Managua"));