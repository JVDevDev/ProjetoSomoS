import Api from '../services/Api'
import Pagination from './Pagination'
import { useState, useEffect } from 'react'

import '../styles/Nav.css'

function Nav() {
    const [page, setPage] = useState(0)
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        const getPokemons = async () => {
            await Api.get(`?limit=6&offset=${page}`)
                .then(res => {
                    setPokemon(res.data.results)
                })
                .catch(erro => {
                    console.log('Deu erro aqui, calma: ' + erro)
                })
        }
        getPokemons()
    }, [page])


    return (
        <div id="lista" className="nav">
            {pokemon.map((pokemon) => (
                <button className='itemList'>{pokemon.name}</button>
            ))}
            <Pagination page={page} setPage={setPage} />
        </div>
    )
}

export default Nav
