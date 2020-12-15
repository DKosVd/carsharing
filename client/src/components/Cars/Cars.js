import React from 'react'
import CarsView from './CarsView';

function Cars(props) {
    const [active, setActive] = React.useState(false);
    const handleClick = (e) => {
            setActive(true)
    }

    const closeModal = (e) => {
        if(e.target.classList.value === 'ModalWindow' ||  e.target.classList.value === 'close') {
            setActive(false)
        }
    } 
    return (
        <CarsView closeModal={closeModal} active = {active} setActive = {handleClick} {...props}/>
    )
}

export default Cars;
