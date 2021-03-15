import React from 'react'
import { useHistory } from 'react-router-dom'
import { opt } from '../../../utils/capitalizeAndOpt'
export function Order({id_cart, order_date, return_date, cost}) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/admin/orders/${id_cart}`)
    }

    return (
        <div className="order_row" onClick={handleClick}>
            <div className="order_order order_size">
                <p className="order_title">Заказ</p>
                <span className="order_text">Дата начала аренды: {new Date(order_date).toLocaleString('ru', opt)}</span>
                <span className="order_text">Дата возврата: {new Date(return_date).toLocaleString('ru', opt)}</span>
                <span className="order_text">Сумма аренды: {cost}</span>
            </div>
        </div>
    )
}
