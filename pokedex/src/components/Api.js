import axios from "axios";
import React, { useState, useEffect } from 'react';

const baseURL = `https://pokeapi.co/api/v2/`


function Api() {
  
  const [name, setName] = useState();

  useEffect(() => {
    async function getName(){
      await axios.get(`${baseURL}pokemon?limit=10`).then((response) => {
        setName(response.data.results)
      })
    }
  getName();
  }, [])
  
  console.log({name});
  return (
    <div>
    </div>
  );
}

export default Api;
