import { useEffect, useState } from 'react'
import Api from '../services/Api'

function useAxios(router) {
    // eslint-disable-next-line
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        Api.get(router)
            .then(res => {
              setPokemon(res.data.results)
            })
            .catch(erro => {
                console.log('Deu erro aqui, calma: ' + erro)
            })
            // eslint-disable-next-line
    }, [])

    return { pokemon }
}

export default useAxios
