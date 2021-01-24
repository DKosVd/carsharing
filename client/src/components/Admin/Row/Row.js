import React from 'react'

export default function Row({userId, id, title, body }) {
  
    return (
        <>
            <tr>
                <td>{userId}</td>
                <td>{id}</td>
                <td>{title}</td>
                <td>{body}</td>
            </tr>
        </>
    )
}
