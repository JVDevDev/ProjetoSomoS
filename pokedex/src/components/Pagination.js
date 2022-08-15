import React, { useEffect } from 'react'
import '../styles/ControlPage.css'

function Pagination({ page, setPage }) {
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
        if (page >= 193) {
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
            <button
                id="next"
                className="controlPage"
                onClick={nextPage}
            >
                Próximo
            </button>
        </div>
    )
}
export default Pagination;
