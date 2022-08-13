import React, { useEffect } from "react";
import Api from '../services/Api';
import './Nav.css';

function Nav (){

  


  useEffect(() => {
    const pokemons = []
    const page = 0;
    Api
      .get(`?limit=1&offset=${page}`)
      .then((res) => {
        pokemons.push(res.data.results)
        pokemons.forEach((mostrar) => {
          for (let i = 0; i < mostrar.length; i++) {
            const listaDePokemons = document.querySelector("#lista");
            listaDePokemons.innerHTML += (`<li className='itemList'>${mostrar[i].name}`);
          }
        });
      })
      .catch((erro) => {
        console.log("Deu erro aqui calma: " + erro)
      })
  }, [])
  
  
  return(
    <div id="lista" className='nav'>
      
    </div>
  );
}

export default Nav;