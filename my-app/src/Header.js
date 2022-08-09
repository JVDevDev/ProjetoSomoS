import React, { useEffect, useState } from 'react';

function Example() {

  const [hora, setHoras] = useState(23);
  const [minuto, setMinutos] = useState(59);
  const [segundo, setSegundos] = useState(30);

  useEffect(()=>{
    
    const interval = setInterval(()=>{
      setSegundos(segundo + 1);
      if(segundo == 59){
        setSegundos(0);
        setMinutos(minuto+1);
        if(minuto == 59){
          setMinutos(0);
          setHoras(hora + 1);
          if(hora == 23){
            setHoras(0);
          }
        }
      }
      
    }, 1000);

    return() => clearInterval(interval);

  });

  return (
    <div>
      <h1>{hora}:{minuto}:{segundo}</h1>
    </div>
  );
}

export default Example;