import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('Elige el color d el semaforo: ', (color) => {
//     switch (color){
//         case 'rojo':
//             console.log("Elegiste el semaforo color rojo 🔴 ");
//             break;
//         case 'amarillo':
//             console.log("Elegiste el semaforo color amarillo 🟡 ");
//             break;
//         case 'verde':
//             console.log("Elegiste el semaforo color verde 🟢 ");
//             break;
//         default:
//             console.log("Error de color, no existe")
//         break;           
//     }
//     rl.close();
// })

// let rutaBuses = ["90B", "90G", "90F", "90FA"]

// for (let index = 0; index < rutaBuses.length; index++) {
//     console.log("Ruta: ", rutaBuses[index])
//     console.log("Item", index)
    
// }

//Contador
// rl.question("Ingrese hasta qué numeros quiere que llegue el contador ", (n) => {
//     let toNum = parseInt(n)
// //Modificar que solo muestre números pares
//     for(let i = 0; i <= toNum; i++){
//         if(i % 2 === 0){
//             console.log(i)
//         }
//     }
//     rl.close();
// })

//For of

// const nombres = ['Julio', 'Eze', 'Olmert'];
// for (let nombre of nombres)
// console.log("Un saludo para: ", nombre)

let student = {
    nombre: "Julio",
    edad: 20,
    carrera: "Software" ,
    promedio : 6.0
}

for (const propiedad in student){
    console.log(`${propiedad}: ${student[propiedad]}`)
}
rl.close();

//Buscar un valor
for(let i = 0; i < nombres; i++)