let personas = [
  {nombre: "Juan", edad: 16},
  {nombre: "Maria", edad: 22},
  {nombre: "Pedro", edad: 17},
  {nombre: "Ana", edad: 25}
];

let personaMayor = personas.find((persona) => {
  return persona.edad > 18;
});

console.log("Primera persona mayor de 18:", personaMayor);