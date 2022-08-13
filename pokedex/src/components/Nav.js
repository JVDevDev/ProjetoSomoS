import React, { useEffect, useState } from "react";
import Api from '../services/Api';
import './Nav.css';

function Nav (){
  const [name, setName] = useState([]);

  useEffect(() => {
    
    const page = 0;

    Api
      .get(`?limit=10&offset=${page}`)
      .then((res) => setName(res.data.results))
      .catch((erro) => {
        console.log("Deu erro aqui calma: " + erro)
      })
    
  }, [])
  const listaPokemons = document.querySelector('#lista');
  name.forEach(nomePokemon =>{
    listaPokemons.innerHTML += (`<li className="itemList">${nomePokemon.name}</li>`)
  })
  
  return(
    <div id="lista" className='nav'>
      
    </div>
  );
}

export default Nav;