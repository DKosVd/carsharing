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
    return (
        <Switch>
            <Route exact path={'/admin/orders'}>
                <div className="orders">
                    <h2>Заказы</h2>
                    <div className="orders_row">
                        {state && state.map(elem => <Order key={elem.id_cart} {...elem} />)}
                    </div>
                </div>
            </Route>
            <Route path={'/admin/orders/:id'} component={OrderFull}/>
        </Switch>
    )
}
