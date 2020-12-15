import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetOrder } from '../../store/reducers/order';
import { setNoAdd } from '../../store/actions/order';
import DataPicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ModalView from './ModalView';

function Modal({ count, id_car_mark, name_mark, fullname, src_img, type, type_kpp, transmission, price_day, close }) {
    const [accept, setAccept] = React.useState(false)
    const [choiseDay, setChoise] = React.useState(0)
    const [day, setDay] = React.useState(0);
    const [beforeDay, setBeforeDay] = React.useState(new Date)
    const [afterDay, setAfterDay] = React.useState('');
    const dispatch = useDispatch();
    const { Add } = useSelector(state => state.order)
    const { id, isAuth } = useSelector(state => state.loginpage)
    const handleAccept = () => {
        if (!afterDay) {
            countTime()
        }
        setAccept(!accept)
    }

    const countTime = (date = new Date) => {
        setBeforeDay(date);
        let localeDate = new Date(date)
        let ResultlDate = new Date(localeDate.setDate(localeDate.getDate() + day));
        setAfterDay(ResultlDate)
    }

    const handlerSelect = (date) => {
        countTime(date)
    }

    const handleOnChange = (event) => {
        const { id } = event.currentTarget.dataset
        switch (id) {
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
        id_car_mark: id_car_mark,
        name_mark: name_mark,
        id_user: id,
        DateBefore: beforeDay,
        Price: choiseDay,
        DateAfter: afterDay,
        fullname: fullname,
    }

    const handleSubmit = () => {
        dispatch(SetOrder(results));
    }


    React.useEffect(() => {
        return () => dispatch(setNoAdd())
    }, [])


    return (
        <>
            <ModalView handleSubmit={handleSubmit}
                handleOnChange={handleOnChange}
                handlerSelect={handlerSelect}
                handleAccept={handleAccept}
                Add={Add}
                isAuth={isAuth}
                count={count}
                src_img={src_img}
                type={type}
                type_kpp={type_kpp}
                transmission={transmission}
                price_day={price_day}
                close={close}
                accept={accept}
                choiseDay={choiseDay}
                day={day}
            />
        </>
    )
}

export default Modal;
