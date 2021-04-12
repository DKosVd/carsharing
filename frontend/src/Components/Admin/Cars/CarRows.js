import React from 'react'
import { Link } from 'react-router-dom'

export function CarsRow({drives, id_auto, is_present, mark_of_autos, model, price_values, img, type_of_autos}) {
    return (
        <div className="car_info column">
            <div className="car_image">
                <img src={img} alt={`${mark_of_autos[0]?.name_mark} ${model}`} title={`${mark_of_autos[0]?.name_mark} ${model}`} />
            </div>
            <div className="car_body">
                <h4>{mark_of_autos[0]?.name_mark} {model}</h4>
                <p><span className="car_body_elem">Цена за час:</span>{price_values[0]?.per_hour} ₽</p>
                <p><span className="car_body_elem">Привод:</span> {drives[0]?.name_drive}</p>
                <p><span className="car_body_elem">Тип кузова:</span> {type_of_autos[0]?.name_type}</p>
                <div className="car_link">
                    <Link className="btn btn-secondary" to={`/admin/autos/${id_auto}`}>Подробнее об автомобиле</Link>
                </div>
            </div>
        </div>
    )
}
