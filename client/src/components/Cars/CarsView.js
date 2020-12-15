import React from 'react'
import Modal from '../Modal/Modal';

function CarsView({src_img, id_car_mark, fullname, type, button, active, closeModal, setActive, count, price_day, name_mark}) {

    return (
            <div className="main__car car">
                <div className="car__img">
                    <img className="car__seting" alt="car" src={src_img}/>
                </div>
                <div className="descriptions" id={id_car_mark}>
                    <p>Название: {fullname}</p>
                    <p>Тип: {type}</p>
                    {button && <p className="car__btn car__btn_chose" onClick={setActive}>Забронировать</p>}
                    {active && <Modal count={count} id_car_mark={id_car_mark} name_mark={name_mark} src_img={src_img} fullname={fullname} price_day={price_day} type={type} close={closeModal} close={closeModal} />}
                </div>
            </div>
    )
}

export default CarsView;
