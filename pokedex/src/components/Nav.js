import Api from '../services/Api'
import { useState, useEffect, useContext} from 'react'
import { PaginationContext } from '../contexts/PaginationContexts'
import { IdContext } from '../contexts/IdContexts'

import '../styles/Nav.css'

function Nav() {
    const [pokemon, setPokemon] = useState([]);
    const { page } = useContext(PaginationContext);
    const { setId } = useContext(IdContext);

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

    function getPokemonId(url){
        let getNumberSubstr = url.substr(-7)
        let selectNumbers = getNumberSubstr.replace(/[^0-9]/g,'');
        setId(parseInt(selectNumbers))
    }

    return (
        <div id="lista" className="nav">
            {pokemon.map((pokemon) => (
                <button onClick={() => getPokemonId(pokemon.url)} className='itemList'>{pokemon.name}</button>
            ))}
        </div>
    )
}

export default Nav