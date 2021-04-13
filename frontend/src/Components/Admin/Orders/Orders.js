import React from 'react'
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { clear, fetchOrders } from '../../../store/actions/orders/orders';
import { Loading } from '../../../store/reducers/orders/state';
import { OrderFull } from './OrderFull';
import { Statusorder } from './StatusOrder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Updating } from '../../../store/reducers/order/state';
import { Modal } from '../Modal';

export function Orders(props) {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders)
    const status = useSelector(state => state.orders.LoadingState)
    const update = useSelector(state => state.order.UpdateStatus) === Updating.UPDATED
    const [show, setShow] = React.useState(false)
    React.useEffect(() => {
        dispatch(fetchOrders())
        return () => dispatch(clear())
    }, [update])


    if (status === Loading.LOADING) {
        return (
            <div className="progress_circle">
                <CircularProgress />
            </div>
        )
    }


    return (
        <Switch>
            <Route exact path={'/admin/orders'}>
                <div className="orders">
                    <h2>Заказы</h2>
                    <div className="search__add">
                        {/* <LiveSearch cb={Livesearch} datas={autos} paramsFilterBy={'model'} /> */}
                        <div>
                            <button className="btn btn-primary" type="button" onClick={() => setShow(!show)}><ShoppingBasketIcon />+</button>
                        </div>
                    </div>
                    <Statusorder name={"Ожидают подтверждения"} orders={orders.orderWait} />
                    <Statusorder name={"Подтвержденные заказы"} orders={orders.orderAllow} />
                    <Statusorder name={"Отказано"} orders={orders.orderNotAllow} />
                    <Modal title={"Добавление нового заказа"} show={show} onClose={() => setShow(false)}>
                        <div className="modal_body_main">
                            <form>
                                <button type="submit" className="btn btn-success" >Добавить</button>
                            </form>
                        </div>
                    </Modal>
                </div>
            </Route>
            <Route path={'/admin/orders/:id'} component={OrderFull} />
        </Switch>
    )
}
