import Api from '../services/Api'
import { useState, useEffect, useContext} from 'react'
import { PaginationContext } from '../contexts/PaginationContexts'

import '../styles/Nav.css'

function Nav() {
    const [pokemon, setPokemon] = useState([])
    const { page } = useContext(PaginationContext);

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
        </div>
    )
}

export default Nav
