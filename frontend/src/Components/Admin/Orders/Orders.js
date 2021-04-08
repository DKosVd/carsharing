import axios from 'axios'
import React from 'react'
import { Route, Switch } from 'react-router';
import { Order } from './Order';
import { OrderFull } from './OrderFull';

export function Orders(props) {
    const [state, setState] = React.useState([])

    React.useEffect(() => {
        async function getData() {
            const { data } = await axios.get('/orders');
            setState(data.data)
        }
        getData();
    }, [])

    console.log(state)
    return (
        <Switch>
            <Route exact path={'/admin/orders'}>
                <div className="orders">
                    <h2>Заказы</h2>
                    <h3>Ожидают подтверждения</h3>
                    <div className="orders_row">
                        {state?.wait?.map(elem => <Order key={elem.id_cart} {...elem} />)}
                    </div>
                    <h3>Подтвержденные заказы</h3>
                    <div className="orders_row">
                        {state?.allow?.map(elem => <Order key={elem.id_cart} {...elem} />)}
                    </div>
                    <h3>Отказано</h3>
                    <div className="orders_row">
                        {state?.notAllow?.map(elem => <Order key={elem.id_cart} {...elem} />)}
                    </div>
                </div>
            </Route>
            <Route path={'/admin/orders/:id'} component={OrderFull} />
        </Switch>
    )
}
