import React, { useEffect, useState } from 'react'
import Api from '../services/Api'
import '../styles/Nav.css'

function Nav() {
    // eslint-disable-next-line
    const [page, setPage] = useState(10)
    const [namePokemon, setNamePokemon] = useState([]);

    useEffect(() => {
        Api.get(`?limit=5&offset=${page}`)
            .then(res => {
                const dados = res.data.results
                setNamePokemon(dados.map((nomes)=>{
                  return nomes.name
                }))
            })
            .catch(erro => {
                console.log('Deu erro aqui, calma: ' + erro)
            })
        // eslint-disable-next-line
    }, [page])

    console.log({namePokemon})
    return (
        <div id="lista" className="nav">
            <button className="itemList">pokemon 1</button>
            <button className="itemList">pokemon 2</button>
            <button className="itemList">pokemon 3</button>
            <button className="itemList">pokemon 4</button>
            <button className="itemList">pokemon 5</button>
        </div>
    )
}

export default Nav
