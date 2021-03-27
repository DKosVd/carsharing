import React from 'react'
import { Link } from 'react-router-dom'
import { capitalize, opt } from '../../../utils/capitalizeAndOpt'

export function RowCars({ auto, order_date, return_date, cost }) {
    return (
        <div className="car_info column">
            <div className="car_image">
                <img src={auto.src_img} alt={`${auto.mark_of_auto.name_mark} ${auto.model}`} title={`${auto.mark_of_auto.name_mark} ${auto.model}`} />
            </div>
            <div className="car_body">
                <h4>{auto.mark_of_auto.name_mark} {auto.model}</h4>
                <p><span className="car_body_elem">Сумма:</span> {cost} ₽</p>
                <p><span className="car_body_elem">Дата заказа:</span> {capitalize(new Date(order_date).toLocaleString('ru', opt))}</p>
                <p><span className="car_body_elem">Дата возврата:</span> {capitalize(new Date(return_date).toLocaleString('ru', opt))}</p>
                <div className="car_link">
                    <Link className="btn btn-secondary" to={`/admin/autos/${auto.id_auto}`}>Подробнее об автомобиле</Link>
                </div>
            </div>
        </div>
    )
}
