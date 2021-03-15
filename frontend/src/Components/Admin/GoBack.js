import React from 'react'
import { useHistory } from 'react-router-dom'

export function Goback(props) {
    const history = useHistory();
    const handleClick = () => {
        history.goBack();
    }
    return (
        <>
            <button className="btn btn-primary" type="button" onClick={handleClick}>Назад</button>    
        </>
    )
}
