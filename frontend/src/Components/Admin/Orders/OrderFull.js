import axios from 'axios';
import React from 'react'
import { useHistory, useParams } from 'react-router'
import { opt } from '../../../utils/capitalizeAndOpt';
import { Goback } from '../GoBack';


export function OrderFull() {
    const { id } = useParams();
    const history = useHistory();
    const [data, setData] = React.useState({});
    React.useEffect(() => {
        async function getFullInfo() {
            const { data } = await axios.get(`/orders/${id}`)
            setData(data.data)
        }
        getFullInfo();
    }, [])

    const handlerOrderProccess = (e) => {
        if(e.target.dataset['confirm']) {
            axios.patch(`/orders/${id}/proccess`, {
                isConfirmed: Boolean(+e.target.dataset['confirm']),
                id_user: id
            })
        }
    }

    const handleGoToUser = () => {
        history.push(`/admin/users/${data.id_user}`)
    }

    const handleGoToCar = () => {
        history.push(`/admin/autos/${data.id_avto}`)
    }
    return (
        <div>
            <h2>Подробнее о заказе</h2>
            <Goback />
            <div className="order_full">
                <div className="order_size">
                    <p className="order_title">Аренда</p>
                    <span className="order_text">Дата начала аренды: {new Date(data.order_date).toLocaleString('ru', opt)}</span>
                    <span className="order_text">Дата возврата: {new Date(data.return_date).toLocaleString('ru', opt)}</span>
                    <span className="order_text">Сумма аренды: {data.cost}</span>
                </div>
                <div className="order_size" onClick={handleGoToUser}>
                    <p className="order_title">Арендатор</p>
                    <span className="order_text">{data.first_name} {data.user?.sur_name}</span>
                    <span className="order_text">e-mail: {data.user?.email}</span>
                    <span className="order_text">Никнейм {data.user?.nickname}</span>
                </div>
                <div className="order_size" onClick={handleGoToCar}>
                    <p className="order_title">Автомобиль</p>
                    <span className="order_text">{data.auto?.model}</span>
                    <div className="order_car_img ">
                        <img src={data.auto?.src_img} />
                    </div>
                </div>
            </div>
            <div onClick={handlerOrderProccess}> 
                <button className="btn btn-success" data-confirm="1">Подтвердить</button>
                <button className="btn btn-danger" data-confirm="0">Отказать</button>
            </div>
        </div>
    )
}
