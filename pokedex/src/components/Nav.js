import React, { useEffect, useState } from "react";
import Api from '../services/Api';
import '../styles/Nav.css';

function Nav (){
  // eslint-disable-next-line
  const [page, setPage] = useState(0);
  const [name, setName] = useState([]);


  useEffect(() => {
    const pokemons = []
    Api
      .get(`?limit=10&offset=${page}`)
      .then((res) => {
        pokemons.push(res.data.results)
        pokemons.forEach((mostrar) => {
          mostrar.forEach((nome) =>{
            setName(nome.name)
            console.log({name})
            
          })
        });
      })
      .catch((erro) => {
        console.log("Deu erro aqui calma: " + erro)
      })
      // eslint-disable-next-line
  }, [page])
  
  
  return(
    <div id="lista" className='nav'>
      <li className="itemList">Bubasaulr</li>
      <li className="itemList">Arroz</li>
    </div>
  );
}

export default Nav;