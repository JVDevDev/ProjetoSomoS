import Api from '../services/Api'
import { useEffect, useState, useContext } from 'react'
import { IdContext } from '../contexts/IdContexts'

import '../styles/Description.css'

function Description() {
    const [pokemon, setPokemon] = useState([]);
    const { id } = useContext(IdContext);

    const typeInput = "range"


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
    
    
    return (
        <div className="description">
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                className="image"
                alt="aaa"
            ></img>
            <p className="name">{name}</p>
            {
                types?.map((type)=> (
                    <span className="type" key={type.slot}>{type.type.name}</span>
                ))
            }
            {
                stats?.map((statValue)=>(
                    <div className='statusDiv'>
                        <span className='spanName'>{statValue.stat.name}</span>
                        <input className='status' type={typeInput} min="0" max="150" value={statValue.base_stat} disabled />
                    </div>
                ))
            }
        </div>
    )
}

export default Description;
