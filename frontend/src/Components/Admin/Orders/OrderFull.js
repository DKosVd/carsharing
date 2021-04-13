import axios from 'axios';
import React from 'react'
import { useHistory, useParams } from 'react-router'
import { opt } from '../../../utils/capitalizeAndOpt';
import { Goback } from '../GoBack';
import { useDispatch, useSelector } from 'react-redux';
import { clear, fetchOrder, setProccessReq } from '../../../store/actions/order/order';
import { Loading, Updating } from '../../../store/reducers/order/state';
import { CircularProgress } from '@material-ui/core';

export function OrderFull() {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const order = useSelector(state => state.order.order)
    const status = useSelector(state => state.order.LoadingState)
    const update = useSelector(state => state.order.UpdateStatus) === Updating.UPDATED
    const manager = useSelector(state => state.order.manager)
    React.useEffect(() => {
        dispatch(fetchOrder(id))
        return () => dispatch(clear())
    }, [update])
    const handlerOrderProccess = (e) => {
        if (e.target.dataset['confirm']) {
            dispatch(setProccessReq({
                isConfirmed: Boolean(+e.target.dataset['confirm']),
                id_order: id
            }))
        }
    }

    const handleGoToUser = () => {
        history.push(`/admin/users/${order.id_user}`)
    }

    const handleGoToCar = () => {
        history.push(`/admin/autos/${order.id_avto}`)
    }

    if(status === Loading.LOADING) {
        return (
            <div className="progress_circle">
                <CircularProgress/>
            </div>
        )
    }

    return (
        <div>
            <h2>Подробнее о заказе</h2>
            <Goback />
            <div className="order_full">
                <div className="order_size">
                    <p className="order_title">Аренда</p>
                    <span className="order_text">Дата начала аренды: {new Date(order.order_date).toLocaleString('ru', opt)}</span>
                    <span className="order_text">Дата возврата: {new Date(order.return_date).toLocaleString('ru', opt)}</span>
                    <span className="order_text">Сумма аренды: {order.cost}</span>
                </div>
                <div className="order_size" onClick={handleGoToUser}>
                    <p className="order_title">Арендатор</p>
                    <span className="order_text">{order.user?.first_name} {order.user?.sur_name}</span>
                    <span className="order_text">e-mail: {order.user?.email}</span>
                    <span className="order_text">Никнейм {order.user?.nickname}</span>
                </div>
                <div className="order_size" onClick={handleGoToCar}>
                    <p className="order_title">Автомобиль</p>
                    <span className="order_text">{order.auto?.model}</span>
                    <div className="order_car_img ">
                        <img src={order.auto?.src_img} />
                    </div>
                </div>
            </div>
            <div onClick={handlerOrderProccess}>
                {
                    order.isWait ?
                        <>
                            <button className="btn btn-danger" data-confirm="0" disabled={update === Updating.UPDATING}>Отказать</button>
                            <button className="btn btn-success" data-confirm="1" disabled={update ===  Updating.UPDATING}>Подтвердить</button>
                        </>
                        :
                        order.isConfirmed
                            ? <button className="btn btn-danger" data-confirm="0" disabled={update ===  Updating.UPDATING}>Отказать</button>
                            : <button className="btn btn-success" data-confirm="1" disabled={update ===  Updating.UPDATING}>Подтвердить</button>
                }
            </div>
            {
                manager &&
                <div>
                    <h3>Заказ был обработан администратором</h3>
                    <h3>Имя: {manager.first_name}</h3>
                    <h3>Фамилия: {manager.sur_name}</h3>
                </div>
            }
        </div>
    )
}
