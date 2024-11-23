import React, { useState, useEffect } from 'react';

//Hacer un contador que empiece en 5 y vaya disminuyendo cada segundo
function Recarga() {

  const [contador, setContador] = useState(5);

  useEffect(() => {
   
    if (contador === 0) return;

    const timerId = setTimeout(() => {
      setContador(contador - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [contador]); 

  const recargarContador = () => {
    setContador(5); 
  };

  return (
    <div className="Ejercicios">
      <p>{contador}</p>
      <button onClick={recargarContador}>Count down</button>
    </div>
  );
}

export default Recarga;