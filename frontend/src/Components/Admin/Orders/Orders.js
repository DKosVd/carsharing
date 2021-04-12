import axios from 'axios'
import React from 'react'
import { Route, Switch } from 'react-router';
import { Order } from './Order';
import { OrderFull } from './OrderFull';
import { Statusorder } from './StatusOrder';

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
                    <Statusorder name={"Ожидают подтверждения"} orders={state.wait}/>
                    <Statusorder name={"Подтвержденные заказы"} orders={state.allow}/>
                    <Statusorder name={"Отказано"} orders={state.notAllow}/>
                </div>
            </Route>
            <Route path={'/admin/orders/:id'} component={OrderFull} />
        </Switch>
    )
}
