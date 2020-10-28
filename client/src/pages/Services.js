import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Services(props) {


    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className="services">
                        <div className="services__taxi taxi">
                            <div className="taxi__title">VIP TAXI</div>
                            <div className="taxi__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, temporibus.</div>
                        </div>
                        <div className="services__rent rent">
                            <div className="rent__title">Отдать Авто в аренду</div>
                            <div className="rent__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non doloremque reiciendis vel qui quasi voluptatibus.</div>
                        </div>
                        <div className="main__autopark">
                            <div className="main__title">Автопарк</div>
                            <div className="main__tabs">
                                <div className="main__tab">Все машины</div>
                                <div className="main__tab">Седан</div>
                                <div className="main__tab">Внедорожник</div>
                                <div className="main__tab">Минивэн</div>
                            </div>
                            <div className="main__cars">
                                <div className="main__car car">
                                    <div className="car__img">
                                        <img src="" alt="car" />
                                    </div>
                                    <div className="descriptions">
                                        <p>Название: </p>
                                        <p>Цена: </p>
                                        <p className="car__btn car__btn_help">Условия</p>
                                        <p className="car__btn car__btn_chose">Забронировать</p>
                                    </div>
                                </div>
                                <div className="main__car car">
                                    <div className="car__img">
                                        <img src="" alt="car" />
                                    </div>
                                    <div className="descriptions">
                                        <p>Название: </p>
                                        <p>Цена: </p>
                                        <p className="car__btn car__btn_help">Условия</p>
                                        <p className="car__btn car__btn_chose">Забронировать</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Services;
