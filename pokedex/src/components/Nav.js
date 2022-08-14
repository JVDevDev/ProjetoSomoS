import useAxios from '../hooks/useAxios'
import { useState, useEffect } from 'react'

import '../styles/Nav.css'
import '../styles/ControlPage.css'

function Nav() {
    // eslint-disable-next-line
    const [page, setPage] = useState(0)
    function previousPage() {
        setPage(page - 10)
    }
    function nextPage() {
        setPage(page + 10)
    }
    const { pokemon } = useAxios(`?limit=6&offset=${page}`)
    

    useEffect(() => {
        
    }, [page])
    
    

    return (
        <div id="lista" className="nav">
            {pokemon.map(nomes => (
                <button className="itemList" key={nomes.name}>
                    {nomes.name}
                </button>
            ))}
            <div className="controleTotal">
                <button className="controlPage" onClick={previousPage}>
                    Anterior
                </button>
                <button className="controlPage" onClick={nextPage}>
                    Próximo
                </button>
            </div>
        </div>
    )
}

export default Nav
