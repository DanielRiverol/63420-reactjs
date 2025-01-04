import "./App.css";

import { useRef, useState } from "react";
/* eslint-disable */
function Layout({ title, parrafo, children }) {
  console.log(title, parrafo, children);

  return (
    <div>
      <h2>{title}</h2>
      <p>{parrafo}</p>
      {children}
    </div>
  );
}

function App() {
  // useRef ejemplo 1
  const divRef = useRef(null);
  function handleClick() {
    divRef.current.innerHTML = "Soy un nuevo contenido";
  }
  // const div = document.querySelector('div')[2]
  // div.addEventListener('click, handleClick)
  //  ejemplo 2
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  renders.current += 1;

  return (
    <>
      <div className='card'>
        <h1>useRef</h1>
        <div>
          <p>Hiciste click {count} veces en el botón</p>
          <p>El componente se renderizo {renders.current} veces</p>
          <button onClick={() => setCount(count + 1)}>Sumar</button>
        </div>

        {/* <div>
          <div ref={divRef}>Contenido</div>
          <button onClick={handleClick}>cambiar mensaje</button>
        </div> */}

        {/* <Layout title="Titulo secundario" parrafo="Esto es un parrafo por prop">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorem illo deserunt aliquam necessitatibus inventore est consequatur dicta quo, temporibus ab ipsam quod, praesentium, nihil amet! Quasi maiores molestias doloremque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, distinctio!</p>
        </Layout> */}
      </div>
    </>
  );
}

export default App;
