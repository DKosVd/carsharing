import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetOrder } from '../store/reducers/order';
import { setNoAdd } from '../store/actions/order';
import DataPicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Modal(props) {
    const [accept, setAccept] = React.useState(false)
    const [choiseDay, setChoise] = React.useState(0)
    const [day, setDay] = React.useState(0);
    const [beforeDay, setBeforeDay] = React.useState(new Date)
    const [afterDay, setAfterDay] = React.useState('');
    const dispatch = useDispatch();
    const { Add } = useSelector(state => state.order)
    const { id, isAuth } = useSelector(state => state.loginpage)
    const handleAccept = () => {
        setAccept(!accept)
    }

    const handlerSelect = (date) => {
        setBeforeDay(date);
        let localeDate = new Date(date)
        let ResultlDate = new Date(localeDate.setDate(localeDate.getDate() + day));
        setAfterDay(ResultlDate)
    }
  
    const handleOnChange = (event) => {
        const { id } = event.currentTarget.dataset
        switch(id) {
            case 'day':
                setDay(1);
                return setChoise(+event.currentTarget.value);
            case 'month':
                setDay(30)
                return setChoise(event.currentTarget.value * 30);
            case 'three-month':
                setDay(90)
                return setChoise(event.currentTarget.value * 90);
            case 'six-month':
                setDay(180)
                return setChoise(event.currentTarget.value * 180);

        }
    }
    const results = {
        id_car_mark: props.id_car_mark,
        name_mark: props.name_mark,
        id_user: id,
        DateBefore: beforeDay,
        Price: choiseDay,
        DateAfter: afterDay,
        fullname: props.fullname,
    }
    const handleSubmit = () => {
        dispatch(SetOrder(results));
    }

    React.useEffect( () => {
        return () => dispatch(setNoAdd())
    }, [])

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
                            <img className="ModalBody__img" src={props.src_img}/>
                            {props.count ? <div className="ModalBody__desc">
                                <p>Тип: {props.type}</p>
                                <p>Коробка передач: {props.type_kpp}</p>
                                <p>Привод: {props.transmission}</p>
                                {isAuth ? <div className="ModalBody__managment">
                                    <label><input type="radio" name="price" value={props.price_day} onChange={handleOnChange} data-id="day" />Подписка на день: {props.price_day}</label><br />
                                    <label><input type="radio" name="price" value={Math.floor(props.price_day/2)} onChange={handleOnChange} data-id="month" />Подписка на 30 дней(цена за 1 день): {Math.floor(props.price_day/2)}</label><br />
                                    <label><input type="radio" name="price" value={Math.floor(props.price_day/3)} onChange={handleOnChange} data-id="three-month" />Подписка на 90 дней(цена за 1 день): {Math.floor(props.price_day/3)}</label><br />
                                    <label><input type="radio" name="price" value={Math.floor(props.price_day/4)} onChange={handleOnChange} data-id="six-month" />Подписка на 180 дней(цена за 1 день): {Math.floor(props.price_day/4)}</label><br />
                                    Выберите дату начала проката: <DataPicker 
                                        selected={+new Date()}
                                        minDate={+new Date()}
                                        onSelect={handlerSelect}
                                    />
                                    {!accept && <p>Итоговая цена: {choiseDay}</p>}
                                    <label><input type="Checkbox" onClick={handleAccept} />Вы соглашаетесь с условиями</label>
                                    <div className="ModalBody__accepted">
                                        {(accept && choiseDay) && <button className="ModalBody__btn" onClick={handleSubmit} >Забронировать</button>}
                                        {Add && <p>Автомобиль забронирован</p>}
                                    </div>
                                </div> : <p>Авторизуйтесь, чтобы забронировать автомобиль</p>}
                            </div> : <p>Машины нет в наличии</p>}
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Modal;
