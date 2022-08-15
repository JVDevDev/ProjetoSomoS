import React, { useEffect, useContext } from 'react'
import { PaginationContext } from '../contexts/PaginationContexts'
import '../styles/ControlPage.css'

function Pagination() {
    const { page, setPage } = useContext(PaginationContext)

    useEffect(() => {
        buttonDisabledOn()
        // eslint-disable-next-line
    }, [page])
    function buttonDisabledOn() {
        if (page <= 0) {
            let previous = document.querySelector('#previous')
            previous.disabled = true
        } else {
            let previous = document.querySelector('#previous')
            previous.disabled = false
        }
        if (page >= 1152) {
            let previous = document.querySelector('#next')
            previous.disabled = true
        } else {
            let previous = document.querySelector('#next')
            previous.disabled = false
        }
    }
    function previousPage() {
        if (page <= 0) {
            setPage(0)
        } else {
            setPage(page - 6)
        }
    }
    function nextPage() {
        setPage(page + 6)
    }

    return (
        <div className="controleTotal">
            <button
                id="previous"
                className="controlPage"
                onClick={previousPage}
            >
                Anterior
            </button>
            <button id="next" className="controlPage" onClick={nextPage}>
                Próximo
            </button>
        </div>
    )
}
export default Pagination
