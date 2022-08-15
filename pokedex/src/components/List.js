import '../styles/List.css'
import Nav from './Nav'
import Pagination from './Pagination'
import { PaginationContextProvider } from '../contexts/PaginationContexts'

function List() {
    return (
        <PaginationContextProvider>
            <div className="list">
                <p className="logo">Pokemons</p>
                <Nav />
                <Pagination />
            </div>
        </PaginationContextProvider>
    )
}

export default List
