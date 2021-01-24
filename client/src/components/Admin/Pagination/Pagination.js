import React from 'react'

export default function Pagination({activePage, totalItems, onChange, itemPerPage}) {
    const numbersOfPage = Math.ceil(totalItems/itemPerPage)
    const changeActive = (event) => {
        onChange(event.target.textContent-1);
    }
    return (
        <>
            <div className="pagination">
                {numbersOfPage && Array(numbersOfPage).fill(null).map((elem, idx) => 
                <div 
                key={`${elem}__${idx}`} 
                className={activePage === idx ? 'pagination__active': ''} 
                onClick={changeActive}>
                    {idx+1}
                </div>)}
            </div>
        </>
    )
}
