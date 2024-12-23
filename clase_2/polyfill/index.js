// LTS
// node --watch archivo.js
// let nombre;
// nombre = "Andres";
// nombre= "Antonio"
// console.log(nombre);

// Before
// function saludar(nombre){
// return "Hola "+nombre
// }
// console.log(saludar("Diego"));
// console.log(saludar("Magali"));

// after

// const saludar = (nombre)=> "Hola "+ nombre
// console.log(saludar("Diego"));
// console.log(saludar("Magali"));

// const nombre = "Karen";
// const edad = 23;

// const persona = {
//   nombre: nombre,
//   edad: edad,
// };
// const persona = {
//   nombre,
//   edad,
// };

// console.log(persona);

// function saludar(nombre){
//     nombre = nombre || "Invitado"
// if(nombre == undefined){ // a desarrollar}
//     return "Hola "+ nombre
// }
// console.log(saludar());
// console.log(saludar("Naim"));

// function saludar(nombre = "invitado"){
//     return "Hola " + nombre
// }
// console.log(saludar());
// console.log(saludar("Naim"));

// let nombre=  "Santiago"

// // let mensaje = "Hola " + nombre
// let mensaje = `Hola ${nombre}`

// console.log(nombre);
// console.log(mensaje);

const persona = {
  nombre: "Andres",
  edad: 18,
};

// if (persona.edad >= 18) {
//   console.log("Podes entrar al casino");
// } else {
//   console.log("NO Podes entrar al casino");
// }

persona.edad >= 18
  ? console.log("Podes entrar al casino")
  : console.log("NO Podes entrar al casino");

