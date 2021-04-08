import React, { createRef } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Route, Switch, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, clear, deleteUser } from '../../../store/actions/user/user';
import { Loading } from '../../../store/reducers/user/state';
import Edituser from './EditUser';
import { Goback } from '../GoBack';
import { RowCars } from './RowCars';
import { prepareDate } from '../../../utils/prepareDate';
import Alert from '../Alert'

export function Fullinfo(props) {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const LoadingState = useSelector(state => state.user.LoadingState);
    const [open, setOpen] = React.useState(false);
    const toggle = createRef();
    const handlerOpenMenu = (e) => {
        setOpen(!open)
    }


    const handlerOptionalActions = (e) => {
        if (e.target.dataset.opt === 'delete') {
            const solve = window.confirm('Вы уверены, что хотите удалить данного пользователя?')
            if (solve) {
                dispatch(deleteUser(id))
                history.push('/admin/users')
            }
        }
        if (e.target.dataset.opt === 'edit') {
            history.push(`/admin/users/${id}/edit`)
        }
        return;
    }

    React.useEffect(() => {
        dispatch(fetchUser(id))
        return () => {
            dispatch(clear())
        }
    }, [])

    React.useEffect(() => {
        function clickOutSide(e) {
            if(toggle.current && open && !toggle.current.contains(e.target)) {
                setOpen(!open)
            }
        }
        window.addEventListener('click', clickOutSide)
        return () => window.removeEventListener('click', clickOutSide)
    }, [toggle])



    if (LoadingState === Loading.LOADING) {
        return (
            <div className="progress_circle">
                <CircularProgress />
            </div>
        )
    }

    if(LoadingState === Loading.ERROR) {
        return <Alert text={'Ошибка получения данных'} alert={'alert-danger'} />
    }



    return (
        <>
            <Switch>
                <Route  exact path={"/admin/users/:id"}>
                    <div >
                        <p className="title">Информация о пользователе</p>
                        <Goback/>
                        <div className="user">
                            <div className="user_info column">
                                <div  className="user_info_sn">
                                    <span className="user_info_title">{user.sur_name} | {user.first_name}</span>
                                    <span className="user_info_dots" onClick={handlerOpenMenu}><MoreVertIcon />
                                        <div ref={toggle} className={`user_menu user_menu_open`}>
                                        {open && <ul onClick={handlerOptionalActions}>
                                                <li data-opt="edit">Редактировать</li>
                                                <li data-opt="delete">Удалить</li>
                                            </ul>}
                                        </div>
                                    </span>
                                </div>
                                <p>E-mail: {user.email}</p>
                                <p>Никнейм: {user.nickname}</p>
                                <p>Возраст: {prepareDate(new Date(),new Date(`${user.age}`))}</p>
                            </div>
                            <div className="user_info user_orders user_text_align_center column">
                                <h4>Всего заказов</h4>
                                <p>{user.carts?.length}</p>
                            </div>
                            <div className="user_info user_orders_price user_text_align_center column">
                                <h4>Заказов на сумму</h4>
                                <p>{user.carts?.reduce((acc, val) => acc +  (+val.cost), 0) || 0} ₽</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Заказы пользователя</h2>
                        <div className="cars">
                            {user.carts?.length ? user.carts.map( (order, i) => <RowCars key={`${order.model}__${i}`} {...order} isOrder={true}/>) : <p>Пока заказов нет</p>}
                        </div>
                    </div>
                </Route>
                <Route  path={"/admin/users/:id/edit"} component={Edituser} />
            </Switch>
        </>
    )
}
