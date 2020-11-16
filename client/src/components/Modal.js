import React from 'react';

function Modal(props) {
    const [accept, setAccept] = React.useState(true)
    const [choiseDay, setChoise] = React.useState(true)
    const handleAccept = () => {
        setAccept(!accept)
    }
    const handleOnChange = (event) => {
        const { id } = event.currentTarget.dataset
        if(id === 'day') {
            setChoise(+event.currentTarget.value)
        } else {
            setChoise(event.currentTarget.value * 30)
        }
    }
    return (
        <>
            <div className="ModalWindow" onClick={props.close}>
                <div className="Modal">
                    <div className="ModalClose">
                        <span className="close" ></span>
                    </div>
                    <div className="ModalContent">
                        <div className="ModalHeader">
                            <h3>{props.fullname}</h3>
                        </div>
                        {props.count ? <div className="ModalBody">
                            <img className="ModalBody__img"/>
                            <div className="ModalBody__desc">
                                <p>Тип: {props.type}</p>
                                <p>Коробка передач: {props.type_kpp}</p>
                                <p>Привод: {props.transmission}</p>
                                <label><input type="radio" name="price" value={props.price_day} onChange={handleOnChange} data-id="day"/>Цена за день: {props.price_day}</label><br/>
                                <label><input type="radio" name="price" value={props.price_day_month} onChange={handleOnChange} data-id="month"/>Цена за день при бронировании на месяц: {props.price_day_month}</label>
                                <div className="ModalBody__managment">
                                <label><input type="Checkbox" onClick={handleAccept}/>Вы соглашаетесь с условиями</label>
                                <div className="ModalBody__accepted"><button  disabled={accept && choiseDay} >Забронировать</button></div>
                                </div>
                            </div>
                        </div>: <p>Машины нет в наличии</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;
