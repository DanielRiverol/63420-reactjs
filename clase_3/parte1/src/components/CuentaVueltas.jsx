import { useEffect, useState } from "react";

const CuentaVueltas = () => {
  const [vuelta, setVuelta] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(0); //opcional
    const intervalo = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => {
      clearInterval(intervalo);
    };
  }, [vuelta]);

  return (
    <div>
      <p>Cantidad de vueltas:{vuelta}</p>
      <p>Tiempo transcurrido:{time}</p>
      <button onClick={() => setVuelta((vuelta) => vuelta + 1)}>
        Dar vuelta
      </button>
    </div>
  );
};

export default CuentaVueltas;
