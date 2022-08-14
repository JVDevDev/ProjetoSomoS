import usePages from '../hooks/usePages'
import useAxios from '../hooks/useAxios'

import '../styles/Nav.css'

function Nav() {
  
    
    const { page } = usePages;
    
    const { pokemon } = useAxios(`?limit=6&offset=${page}`)

    
    

    return (
        <div id="lista" className="nav">
            {pokemon.map((nomes) => 
            <button className='itemList'>{nomes.name}</button>
            )}
        </div>
    )
}

export default Nav
