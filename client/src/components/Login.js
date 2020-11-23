import { LogOut } from '../store/reducers/loginpage';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Details from './Datails';
import { SetHistoryOrders } from '../store/reducers/order';

function Login(res) {
    const dispatch = useDispatch();
    const [active, setActive] = React.useState(false)
    const { history } = useSelector(state => state.order)
    const itemHistory = React.useRef();
    const LogOutButton = () => {
        dispatch(LogOut());
    }
    const handlerHistoryOrder = React.useCallback(() => {
        dispatch(SetHistoryOrders(res.id));
        console.log('1Request...')
    }, [res.id])

    React.useEffect( () => {
        const { current } = itemHistory;
        current.addEventListener('click', handlerHistoryOrder)
        console.log(history)
        history.length && current.removeEventListener('click', handlerHistoryOrder)
    }, [history])

    const handlerSetOrders = () => {
        setActive(!active);
    }
    
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="main__personal personal">
                        <div className="personal__data">
                            <div className="personal__logo">
                                <img src="" alt="" />
                            </div>
                            <div className="personal__info">
                                <p>Личные данные</p>
                                <p><span className="personal__info personal__info_name">{res.name}</span></p>
                            </div>
                        </div>
                        <div className="personal__nav">
                            <div className="personal__history">
                                <div className="personal__history_item" onClick={handlerSetOrders} ref={itemHistory}>История заказов</div>
                                {active && <div className="personal__items">
                                    {history.length ? history.map((item, index) => <Details key={`${item}__${index} `} {...item} />) : <p>Заказов нет</p>}
                                </div>}
                            </div>
                            <div className="personal__settings">
                                <div className="personal__setting">Настройки</div>
                                <div>
                                    <p>Смена пароля</p>
                                    <label>Старый пароль<input type="password" /></label><br />
                                    <label>Новый пароль<input type="password" /></label><br />
                                    <label>Подтвердите новый пароль<input type="password" /></label>
                                </div>
                            </div>
                            <button onClick={LogOutButton} className="personal__btn">Выход</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
