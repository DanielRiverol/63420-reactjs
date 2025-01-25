import { useState } from "react";

function Login() {
  const  [isLoggedIn, setisLoggedIn ] = useState(false);

  const toggleState = () => setisLoggedIn((prev) => !prev);

  return (
    <div>
      {isLoggedIn ? (
        <h3>Bienvenido usuario</h3>
      ) : (
        <h3>Por favor, inicia sesión</h3>
      )}
      <button onClick={toggleState}>
        {isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}
      </button>
    </div>
  );
}

export default Login;
