import { useEffect, useState } from "react";
import Login from "./components/Login";
import Role from "./components/Role";
import Filter from "./components/Filter";
import "./App.css";
import Message from "./components/Message";
function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  // console.log(loading);
  const [status, setStatus] = useState(null);
  return (
    <>
      <div className='card'>
        {/* <h1>Renderizado condicional</h1> */}
        {/* {loading ? <h2><span className="spinner"></span> Cargando...</h2> : <h2>Estamos Ready</h2>} */}
        {/* <Login /> */}
        {/* <Role/> */}
        {/* <button
          onClick={() =>
            setStatus({ type: "success", text: "operacion triunfo" })
            }>
            Exito
            </button>
            <button
            onClick={() => setStatus({ type: "error", text: "Algo salio mal" })}>
            Error
            </button>
            <button
            onClick={() => setStatus({ type: "", text: "Mensaje con color genenrioco" })}>
            Generico
            </button>
            {status && <Message type={status.type} text={status.text} />} */}

            <h1>Use Memo</h1>
        <Filter/>
      </div>
    </>
  );
}

export default App;
