import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
/* eslint-disable */
// componente
function Titulo({ titulo, clase }) {
  // return <h1 className={props.clase}>{props.titulo}</h1>
  return <h1 className={clase}>{titulo}</h1>;
}

// function Button({ callback }) {
//   return <button onClick={callback}>Hace clic</button>;
// }

// function Container({ text }) {

//   const handleClick = () => {
//     alert(text);
//   };

//   return (
//     <>
//       <Button callback={handleClick} />
//       <span>texto ayuda</span>
//     </>
//   );
// }

function App() {
  let nombre = "Karen";

  const [mensaje, setMensaje]= useState("")
  return (
    <main>
      <Navbar></Navbar>
      {/* <h2>Titutlo 2</h2> */}
      <Titulo titulo='Bienvenidos' /> {/* Que pasa si no le paso ningun valor */}

      {/* <Container text='Siesta' />
      <Container text='Arriba' /> */}

      <p>{mensaje ? mensaje : "NO hay mensaje disponible"}</p>
      <p>
        {mensaje == "Hola" && "Bienvenido"}
        {mensaje == "Chau" && "Hasta luego nos vemos"}

      </p>
      <button onClick={()=> setMensaje("Hola")}>Saludar</button>
      <button onClick={()=> setMensaje("Chau")}>Despedir</button>
    </main>
  );
}
//main.innerHTML = `<h1 class="big-title">Hola ${nombre}`
export default App;
