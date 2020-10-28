import React from 'react'

function Cars(props) {


    return (
        <>
            <div className="main__car car">
                <div className="car__img">
                    <img src="" alt="car" />
                </div>
                <div className="descriptions">
                    <p>Название: {props.fullname}</p>
                    <p>Цена: {props.price_day}</p>
                    <p>Тип: {props.type}</p>
                    <p className="car__btn car__btn_help">Условия</p>
                    <p className="car__btn car__btn_chose">Забронировать</p>
                </div>
            </div>
        </>
    )
}

export default Cars;
