import { createContext, useState } from 'react'

const PaginationContext = createContext()

function PaginationContextProvider({ children }) {
    const [page, setPage] = useState(0);

    return (
        <PaginationContext.Provider value={{page, setPage}}>
            {children}
        </PaginationContext.Provider>
    )
}

export { PaginationContext, PaginationContextProvider }
