import React from 'react'


export function Row({id, userClick, name, surName, age}) {
 
    const hadlerClick = () => {
        userClick(id)
    }
    return (
        <>
            <tr onClick={hadlerClick}>
                <td>{surName}</td>
                <td>{name}</td>
                <td>{age}</td>
            </tr>
        
        </>
    )
}
