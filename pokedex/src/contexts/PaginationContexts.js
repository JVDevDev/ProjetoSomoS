import { createContext, useState } from 'react'

const PaginationContext = createContext()

function PaginationContextProvider({ children }) {
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(6);

    return (
        <PaginationContext.Provider value={{page, setPage, limit, setLimit}}>
            {children}
        </PaginationContext.Provider>
    )
}

export { PaginationContext, PaginationContextProvider }
