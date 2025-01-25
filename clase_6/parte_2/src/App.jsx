import "./App.css";
import { CartProvider, useCart } from "./contexts/CartContext";
function App() {
  return (
    <>
      <CartProvider>
        <h1>Carrito de compras</h1>
        <ProductList />
        {/* <Cart/> */}
      </CartProvider>
    </>
  );
}

function ProductList() {
  const { addItem } = useCart();
  const products = [
    { id: 1, name: "Producto A", price: 100 },
    { id: 2, name: "Producto B", price: 200 },
    { id: 3, name: "Producto C", price: 300 },
  ];

  return (
    <div>
      <h2>Lista de productos</h2>
      {products.map((product) => (
        <div key={product.id} className='card'>
          <span>
            {product.name} - ${product.price}
          </span>
          <button onClick={() => addItem()}>Agregar + </button>
        </div>
      ))}
    <Cart/>
    </div>
  );
}

function Cart() {
  const { cart, removeItem, clear } = useCart();
  console.log(cart);
  
  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (<p>El carrito esta vacio</p>)
      :
      (<div>
        <ul>
          {cart.map(item=>{
            <li key={item.id}>
              {item.name} - {item.quantity} unidades
              <button>Eliminar</button>
            </li>
          })}
        </ul>
      </div>)}
    </div>
  )
}

export default App;
