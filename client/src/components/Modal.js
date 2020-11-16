import React from 'react';
import { useSelector } from 'react-redux';

function Modal(props) {
    const [accept, setAccept] = React.useState(true)
    const [choiseDay, setChoise] = React.useState(true)
    // const [value, setValue] = React.useState(1)
    const { id, isAuth } = useSelector(state => state.loginpage) 
    const handleAccept = () => {
        setAccept(!accept)
    }
    const handleOnChange = (event) => {
        const { id } = event.currentTarget.dataset
        id === 'day' ? setChoise(+event.currentTarget.value): setChoise(event.currentTarget.value * 30);
    }
    const results = {
        id_car_mark:props.id_car_mark,
        name_mark: props.name_mark,
        id_user: id, 
        DateAfter: '',
        Price: choiseDay,
        DateBefore: '',
    }
    const handleSubmit = () => {
        console.log(results) 
        // Добавить в бд информацию о заказе юзера
    }
    // const handleSetValue = (event) => {
    //     setValue(event.target.value)
    //     console.log(event.target.value)
    //     setChoise(props.price_day * value)
    // }
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
                        <div className="ModalBody">
                            <img className="ModalBody__img"/>
                            {props.count ? <div className="ModalBody__desc">
                                <p>Тип: {props.type}</p>
                                <p>Коробка передач: {props.type_kpp}</p>
                                <p>Привод: {props.transmission}</p>
                                {isAuth ? <div className="ModalBody__managment">
                                <label><input type="radio" name="price" value={props.price_day} onChange={handleOnChange} data-id="day" />Цена за день: {props.price_day}</label><br/>
                                <label><input type="radio" name="price" value={props.price_day_month} onChange={handleOnChange} data-id="month" />Цена за день при бронировании на месяц: {props.price_day_month}</label><br/>
                                {/* <input type="range" min="1" max="30" step="1" value={value} onChange={handleSetValue}/><br/> */}
                                {!accept && <p>Итоговая цена: {choiseDay}</p>}
                                <label><input type="Checkbox" onClick={handleAccept}/>Вы соглашаетесь с условиями</label>
                                <div className="ModalBody__accepted"><button  disabled={accept && choiseDay} onClick={handleSubmit} >Забронировать</button></div>
                                </div>:<p>Авторизуйтесь, чтобы забронировать автомобиль</p> }
                            </div>: <p>Машины нет в наличии</p>} 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;
