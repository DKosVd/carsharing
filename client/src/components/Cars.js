import React from 'react'
import Modal from './Modal';

function Cars(props) {
    const [active, setActive] = React.useState(false);
    const handleClick = (e) => {
            console.log(e.target.parentElement)
            setActive(true)
    }

    
    const closeModal = (e) => {
        if(e.target.classList.value === 'ModalWindow' ||  e.target.classList.value === 'close') {
            setActive(false)
        }
    } 
    return (
        
            <div className="main__car car">
                <div className="car__img">
                    <img src="" alt="car" />
                </div>
                <div className="descriptions" id={props.id_car_mark}>
                    <p>Название: {props.fullname}</p>
                    <p>Тип: {props.type}</p>
                    {props.button && <p className="car__btn car__btn_chose" onClick={handleClick}>Забронировать</p>}
                    {active && <Modal  close={closeModal} {...props}/>}
                </div>
            </div>
   
    )
}

export default Cars;
