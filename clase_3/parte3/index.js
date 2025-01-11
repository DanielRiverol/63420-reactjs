// const devolverCampera = (respuesta) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (respuesta == "si") {
//         resolve("Si gracias por prestarme la campera");
//       } else {
//         reject("No, la perdí");
//       }
//     }, 3000);
//   });
// };

// console.log("hola Richard te acordas la campera que te preste?");
// devolverCampera("")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(()=>{
//     console.log("Chau");

//   });

// console.log("Sigo haciendo cosas");
// UUID4

console.log("Cargando...");

const productos = [
  {
    id: "A001",
    name: "Zapatillas",
    description: "Zapatillas deportivas",
    stock: 20,
    precio: 30000,
  },
  {
    id: "A002",
    name: "Camiseta",
    description: "Camiseta Argentina",
    stock: 10,
    precio: 45000,
  },
  {
    id: "A003",
    name: "Pelota",
    description: "Pelota Argentina",
    stock: 20,
    precio: 33000,
  },
  {
    id: "A004",
    name: "Shrots",
    description: "Short Argentina",
    stock: 10,
    precio: 12000,
  },
];
//repasar spread operatator
const precioActualizado = productos.map((item) => {
  return {
    ...item,
    precio: item.precio * 1.21,
  };
});
console.log(productos);

console.log(precioActualizado);

const obtenerProductos = (arr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, 2500);
  });
};

// obtenerProductos(productos).then((res) => console.log(res));
