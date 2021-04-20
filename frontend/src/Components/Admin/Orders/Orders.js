import React from 'react'
import * as yup from "yup";
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { CircularProgress } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { clear, fetchOrders } from '../../../store/actions/orders/orders';
import { Loading } from '../../../store/reducers/orders/state';
import { OrderFull } from './OrderFull';
import { Statusorder } from './StatusOrder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Updating } from '../../../store/reducers/order/state';
import { Modal } from '../Modal';
import ResultSearch from '../ResultSearch';
import SearchItems from './SearchItems';
import { addNewOrder } from '../../../store/actions/order/order';

const schema = yup.object().shape({

    first_name: yup.string().required().min(2, 'Минимальная длина 2 символа'),
    sur_name: yup.string().required().min(2, 'Минимальная длина 2 символа'),
    nickname: yup.string().required().min(2, 'Минимальная длина 2 символа'),
    password: yup.string().required().min(6, 'Минимальная длина 6 символов'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
    email: yup.string().email('Недопустимый формат для почты').required().min(10, 'Минимальная длина 10 символов'),
    age: yup.date()
})

export function Orders(props) {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders)
    const status = useSelector(state => state.orders.LoadingState)
    const update = useSelector(state => state.order.UpdateStatus) === Updating.UPDATED
    const [stateForm, setStateForm] = React.useState({});
    const [show, setShow] = React.useState(false)
    const [resultSearch, setResultSearch] = React.useState(false)
    const [stateSearch, setStateSearch] = React.useState({});
    const [chose, setChose] = React.useState({});
    React.useEffect(() => {
        dispatch(fetchOrders())
        return () => dispatch(clear())
    }, [update])

    const handleChose = (item) => {
        setChose({...chose, ...item})
    }



    const handleSetStateForm = async (e) => {
        setStateForm({
            ...stateForm,
            [e.target.name]: e.target.value
        })
    }

   

    const handleSearch = async (e) => {
        try {
            const [name, sname] = stateForm[e.target.name].split(' ')
            const { data } = await axios.get(`/${e.target.id}/search?q=${name || ''}&s=${sname || ''}`)
            setStateSearch({
                ...stateSearch,
                [e.target.id]: data.data
            })
            setResultSearch({
                [e.target.id]: true
            })
        } catch (err) {
        }
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        dispatch(addNewOrder({...stateForm, ...chose}))
    }



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
                        <ResultSearch show={resultSearch.auto} onClose={() => setResultSearch({auto: false})} >
                            <SearchItems items={stateSearch.auto} select={['model']} chose={handleChose} type={'auto'}/>
                        </ResultSearch>
                        <ResultSearch show={resultSearch.user} onClose={() => setResultSearch({user: false})}>
                            <SearchItems items={stateSearch.user} select={['first_name', 'sur_name', 'email', 'age', 'nickname']} chose={handleChose} type={'user'}/>
                        </ResultSearch>
                        <div className="modal_body_main">
                            <form onSubmit={handleSumbit}>
                                <div className="modal_body_elem">
                                    <label htmlFor="user">Пользователь</label>
                                    <input type="text" name="user" id="user" placeholder="Найти пользователя" value={stateForm?.user || ''} onBlur={handleSearch} onInput={handleSetStateForm} required />
                                </div>
                                <div className="modal_body_elem">
                                    <label htmlFor="auto">Автомобиль</label>
                                    <input type="text" name="auto" id="auto" placeholder="Найти автомобиль" value={stateForm?.auto || ''} onBlur={handleSearch} onInput={handleSetStateForm} required />
                                </div>
                                <div className="modal_body_elem">
                                    <label htmlFor="order_date">Дата начала аренды</label>
                                    <input type="date" name="order_date" id="order_date" onInput={handleSetStateForm} required />
                                </div>
                                <div className="modal_body_elem">
                                    <label htmlFor="return_date">Дата окончания аренды</label>
                                    <input type="date" name="return_date" id="return_date" onInput={handleSetStateForm} required />
                                </div>
                                <div className="modal_body_elem">
                                    <p>Состояние заказа</p>
                                    <div className="modal_body_elem_df">
                                        <label htmlFor="status_access"><CheckIcon />
                                        </label>
                                        <input type="radio" name="status_order" id="status_access" value="1" onInput={handleSetStateForm} required />
                                    </div>
                                    <div className="modal_body_elem_df">
                                        <label htmlFor="status_reject"><CloseIcon />
                                        </label>
                                        <input type="radio" name="status_order" id="status_reject" value="0" onInput={handleSetStateForm} required />
                                    </div>
                                </div>
                                <div className="modal_body_elem">
                                    <label htmlFor="isWait">В ожидании</label>
                                    <input type="checkbox" name="isWait" id="isWait" value="0" defaultValue="1" onInput={handleSetStateForm} defaultChecked required />
                                </div>
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
