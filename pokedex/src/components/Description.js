import Api from '../services/Api'
import { useEffect, useState, useContext } from 'react'
import { IdContext } from '../contexts/IdContexts'

import '../styles/Description.css'

function Description() {
    const [pokemon, setPokemon] = useState([])
    const { id } = useContext(IdContext)

    const typeInput = 'range'

    useEffect(() => {
        const getPokemons = async () => {
            await Api.get(`/${id}`)
                .then(res => {
                    setPokemon(res.data)
                })
                .catch(erro => {
                    console.log('Deu erro aqui, calma: ' + erro)
                })
        }
        getPokemons()
        // eslint-disable-next-line
    }, [id])
    const { name, types, stats } = pokemon

    const callPikachu = e => {
        if(e.detail === 3){
            if(name === "pikachu"){
                if (window.matchMedia('(min-width: 800px)').matches){
                    document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg')";
                }else{
                    let pokedex = document.querySelector("#pokedex")
                    pokedex.style.backgroundImage = "url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg')";
                }
            }
        }
    }

    return (
        <div className="description">
            <div className="divImage">
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    className="image"
                    onClick={callPikachu}
                    alt={`${name}`}
                ></img>
            </div>
            <p className="name">{name}</p>
            <div className="divType">
                {types?.map(type => (
                    <span className="type" key={type.slot}>
                        {type.type.name}
                    </span>
                ))}
            </div>
            <div className="marginStatus">
                {stats?.map(statValue => (
                    <div className="divAlign">
                        <span className="spanName">{statValue.stat.name}</span>
                        <input
                            className="status"
                            type={typeInput}
                            min="0"
                            max="150"
                            value={statValue.base_stat}
                            disabled
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Description;
