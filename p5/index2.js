//closure ejemplos
//contador
function crearContador (){
    //contexto en memoria
    let contador = 0
    return function(){
        contador++
        return contador
    }
}

let contador1 = crearContador()
let contador2 = crearContador()
// console.log(contador1())
// console.log(contador1(),"<= contador 1\n")
// console.log("Hola soy el contador 2", contador2())

//El saldo en una cuenta bancaria
function cuentaDeAhorro(inicial){
    let saldo = inicial;
    return{
        verSaldo: () => saldo,
        depositar: x => saldo += x,
        retirar: x => saldo -= x+1
    }
}
let miCuenta = cuentaDeAhorro(100);
// console.log(`tu saldo es: ${miCuenta.verSaldo()}`)
// miCuenta.depositar(250)
// miCuenta.retirar(110)
// console.log(`tu saldo es: ${miCuenta.verSaldo()}`)

//callback funcition
let numeros = [2,4,6,7,9]
function recorrerArray(arr, callback){
    for(let item of arr){
        callback(item)
    }
}
// recorrerArray(numeros, n => console.log(n ** n))

// function procesarUsuario(nombre, callback){
//     console.log(`procesando usuario: ${nombre}, espere...`)
//     callback(nombre)
// }

// procesarUsuario("Kevin", function(nombre){
//     console.log("Ya estas siendo procesado", nombre)
// })

//FUNCIONES
const sumar = (a,b) => a + b
const saludo = () => "Hola Mundo"
console.log(sumar(40, 55))
console.log(saludo())

const pares = [2,4,6,8]
const exponente = pares.map( x => x * x)
console.log("Array Normal", pares)
console.log("Elevado a si mismo", exponente)