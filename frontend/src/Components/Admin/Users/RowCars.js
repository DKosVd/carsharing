import React from 'react'
import { Link } from 'react-router-dom'
import { capitalize, opt } from '../../../utils/capitalizeAndOpt'

export function RowCars({ name_mark, name_drive, name_rudder, name_type, cost, order_date, return_date, src_img, model, per_hour, id_auto, isOrder=false }) {
    return (
        <div className="car_info column">
            <div className="car_image">
                <img src={src_img} alt={`${name_mark} ${model}`} title={`${name_mark} ${model}`}/>
            </div>
            <div className="car_body">
                <h4>{name_mark} {model}</h4>
                {isOrder ? <>
                    <p><span className="car_body_elem">Сумма:</span> {cost} ₽</p>
                    <p><span className="car_body_elem">Дата заказа:</span> {capitalize(new Date(order_date).toLocaleString('ru', opt))}</p>
                    <p><span className="car_body_elem">Дата возврата:</span> {capitalize(new Date(return_date).toLocaleString('ru', opt))}</p>
                </> :
                    <>
                         <p><span className="car_body_elem">Цена за час:</span> {per_hour} ₽</p>
                         <p><span className="car_body_elem">Привод:</span> {name_drive}</p>
                         <p><span className="car_body_elem">Тип кузова:</span> {name_type}</p>
                    </>
                }
                <div className="car_link">
                    <Link className="btn btn-secondary" to={`/admin/autos/${id_auto}`}>Подробнее об автомобиле</Link>
                </div>
            </div>
        </div>
    )
}
