import React from 'react'

function Itemformain({name}) {
    return (
        <>
            <div className="main__item">{name.map( (item, index) => <p key={`${item}__${index}`}>{item}</p>)}</div>
        </>
    )
}

export default Itemformain;
