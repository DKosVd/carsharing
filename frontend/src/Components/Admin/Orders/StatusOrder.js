import React from 'react'
import { Order } from './Order'

export function Statusorder({ name, orders }) {

    if (!(orders?.length)) {
        return null;
    }

    return (
        <>
            <h3>{orders.length && name}</h3>
            <div className="orders_row">
                {orders?.map(elem => <Order key={elem.id_cart} {...elem} />)}
            </div>
        </>
    )
}
