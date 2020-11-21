import { LogOut } from '../store/reducers/loginpage';
import React from 'react'
import { useDispatch } from 'react-redux';
import Details from './Datails';

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
                                    <div className="personal__setting">История заказов</div>
                                    <div className="personal__items">
                                        {/* {[1, 2, 3].map(item => <Details/>)} */}
                                    </div>
                            </div>
                            <div className="personal__settings">
                                <div  className="personal__setting">Настройки</div>
                                 <div>
                                    <p>Смена пароля</p>
                                    <label>Старый пароль<input type="password"/></label><br/>
                                    <label>Новый пароль<input type="password"/></label><br/>
                                    <label>Подтвердите новый пароль<input type="password"/></label>
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
