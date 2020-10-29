import React from 'react'

function Login(props) {
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
                                    <p><span className="personal__info personal__info_name">Имя</span><span
                                        className="personal__info personal__info_surname">Фамилия</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Login;
