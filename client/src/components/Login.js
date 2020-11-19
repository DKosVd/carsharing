import { LogOut } from '../store/reducers/loginpage';
import React from 'react'
import { useDispatch } from 'react-redux';

function Login(res) {
    const dispatch = useDispatch();
    const LogOutButton = () => {
        dispatch(LogOut());
    }
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="main__personal personal">
                        <div className="personal__nav">
                            <ul>
                                <li>Личные данные</li>
                                <li>История заказов</li>
                                <li>Настройки</li>
                            </ul>
                        </div>
                        <div className="personal__data">
                            <div className="personal__logo">
                                <img src="" alt=""/>
                        </div>
                                <div className="personal__info">
                                    <p>Личные данные</p>
                                    <p><span className="personal__info personal__info_name">{ res.name }</span><span
                                        className="personal__info personal__info_surname">{ `${res.name}__${res.id}` }</span></p>
                                        <button onClick={LogOutButton}>Выход</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Login;
