import React from 'react'

export default function SearchItems({ items, select, chose, type }) {
    const [active, setActive] = React.useState(null);
    if(!items.length) {
        return <h1>Loading</h1>
    } 

    const handleChose = (idx, item) => {
        chose({[type]: item})
        setActive(idx)
    }

    return (
        <>
            {items.map((item, idx) => {
                    return (
                        <div key={`${idx}__${item}`} className={`result__search_item ${active === idx ? 'result__search__item__active': ''}`} onClick={() => handleChose(idx, item)}>
                            {select.map( sel => {
                                return (
                                    <div>{item[`${sel}`]}</div>
                                )
                            })}
                        </div>
                    )
                })
            }
        </>
    )
}
