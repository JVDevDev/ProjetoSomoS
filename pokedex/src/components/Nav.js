import Api from '../services/Api'
import { useState, useEffect, useContext } from 'react'
import { PaginationContext } from '../contexts/PaginationContexts'
import { IdContext } from '../contexts/IdContexts'

import '../styles/Nav.css'

function Nav() {
    const [pokemon, setPokemon] = useState([])
    const { page, limit, setLimit } = useContext(PaginationContext)
    const { setId } = useContext(IdContext)

    useEffect(() => {
        function WindowSizes() {
            if (window.matchMedia('(min-width: 2000px)').matches) {
                setLimit(47)
            } else if (window.matchMedia('(min-width: 800px)').matches) {
                setLimit(17)
            } else if (window.matchMedia('(max-width: 800px)').matches) {
                setLimit(6)
            }
        }
        WindowSizes();
        const getPokemons = async () => {
            await Api.get(`?limit=${limit}&offset=${page}`)
                .then(res => {
                    setPokemon(res.data.results)
                })
                .catch(erro => {
                    console.log('Deu erro aqui, calma: ' + erro)
                })
        }

        getPokemons()
    }, [page, limit, setLimit, pokemon])

    function getPokemonId(url) {
        let getNumberSubstr = url.substr(-7)
        let selectNumbers = getNumberSubstr.replace(/[^0-9]/g, '')
        setId(parseInt(selectNumbers))
    }

    return (
        <div id="lista" className="nav">
            {pokemon.map(pokemon => (
                <button
                    onClick={() => getPokemonId(pokemon.url)}
                    className="itemList"
                >
                    {pokemon.name}
                </button>
            ))}
        </div>
    )
}

export default Nav
