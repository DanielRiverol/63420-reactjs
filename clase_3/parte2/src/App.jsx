import "./App.css";
import ItemCount from "./components/ItemCount";
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
function App() {
  function handleCarrito(cantidad, producto) {
    // si cantidad es mas de uno usa el prural
    alert(`Agregaste ${cantidad} ${producto} al carrito`);
  }
  return (
    <>
      <div className='container'>
        {/* <h1>ItemCount</h1> */}
        {/* <ItemCount stock={5} onAdd={handleCarrito} producto='Camisa' />
        <ItemCount stock={20} onAdd={handleCarrito} producto='Pantalon' />
        <ItemCount onAdd={handleCarrito} producto='Zapato' />
        <ItemCount onAdd={handleCarrito} producto='Chaleco' /> */}

        <h1>Listado de productos</h1>
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              {producto.name}, {producto.description}, ${producto.precio}, 
              {producto.stock}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
