import React from 'react'

function Login({name, id}) {
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
                                    <p><span className="personal__info personal__info_name">{ name }</span><span
                                        className="personal__info personal__info_surname">{ `${name}__${id}` }</span></p>
                                    <button>Выход</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Login;
