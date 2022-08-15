import '../styles/List.css'
import Nav from './Nav'
import Pagination from './Pagination'
import { PaginationContextProvider } from '../contexts/PaginationContexts'

function List() {
    return (
        <div className="list">
            <p className="logo">Pokemons</p>
            <PaginationContextProvider>
                <Nav />
                <Pagination />
            </PaginationContextProvider>
        </div>
    )
}

export default List
