import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import PeopleIcon from '@material-ui/icons/People';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import { clear, fetchUsers } from '../../../store/actions/users/users';
import { Fullinfo } from './FullInfo';
import { Row } from './Row';
import { Loading } from '../../../store/reducers/users/state';
import { Delete, Register, Updating } from '../../../store/reducers/user/state';
import { Modal } from '../Modal';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { registerUser } from '../../../store/actions/user/user';



const schema = yup.object().shape({
    first_name: yup.string().required().min(2, 'Минимальная длина 2 символа'),
    sur_name: yup.string().required().min(2, 'Минимальная длина 2 символа'),
    nickname: yup.string().required().min(2, 'Минимальная длина 2 символа'),
    password: yup.string().required().min(6, 'Минимальная длина 6 символов'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
    email: yup.string().email('Недопустимый формат для почты').required().min(10, 'Минимальная длина 10 символов'),
    age: yup.date()
})

export default function Table(props) {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    })
    const handlerSubmit = (data) => {
        dispatch(registerUser(data))
    }
    const [data, setData] = React.useState([
        {
            titleEn: 'sur_name',
            title: 'Фамилия',
            sort: true
        },
        {
            titleEn: 'first_name',
            title: 'Имя',
            sort: true
        },
        {
            titleEn: 'age',
            title: 'Возраст',
            sort: true
        }
    ])
    const [sortBy, setSortBy] = React.useState(null);
    const [show, setShow] = React.useState(false)
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)


    const updateUser = useSelector(state => state.user.UpdateStatus) === Updating.UPDATED;
    const registerUserStatus = useSelector(state => state.user.RegisterUser);
    const statusForUseEffect = registerUserStatus === Register.REGISTERED
    const LoadingState = useSelector(state => state.users.LoadingState)
    const DeleteStatus = useSelector(state => state.user.DeleteUser) === Delete.DELETED
    const history = useHistory();

    React.useEffect(() => {
        async function getUsers() {
            dispatch(fetchUsers(sortBy));
        }
        getUsers()
        return () => dispatch(clear())
    }, [sortBy, updateUser, statusForUseEffect, DeleteStatus])

    const toogleSort = (index) => {
        const copyData = [...data];
        const sort = !copyData[index].sort
        copyData[index] = { ...copyData[index], sort }
        setSortBy(copyData[index])
        setData(copyData)
    }

    const clickHandler = (id) => {
        history.push(`/admin/users/${id}`)
    }

    const onClose = () => {
        setShow(!show)
    }

    if (LoadingState === Loading.LOADING) {
        return (
            <div className="progress_circle">
                <CircularProgress />
            </div>
        )
    }


    return (
        <>
            <Switch>
                <Route exact path={'/admin/users'} >
                    <div className="users">
                        <h2>Пользователи</h2>
                        <div className="search__add">
                                    {/* <LiveSearch cb={Livesearch} datas={autos} paramsFilterBy={'model'} /> */}
                                    <div>
                                        <button className="btn btn-primary" type="button" onClick={() => setShow(!show)}><PeopleIcon/>+</button>
                                    </div>
                                </div>
                        <div className="wrapper_for_users_table">
                            <div>
                                <table className="users_table">
                                    <thead>
                                        <tr>
                                            {data.map((th, i) =>
                                                <th
                                                    key={`${i}__${th.title}`}
                                                    onClick={() => toogleSort(i)}
                                                    data-sort={`${th.sort ? 'desc' : 'asc'}`}>
                                                    <span className={`th_with_arrow`}>{th.title}</span>
                                                    {th.sort ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                                                </th>)}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map(user => <Row userClick={clickHandler} key={user.id_user} id={user.id_user} name={user.first_name} surName={user.sur_name} age={new Date().getFullYear() - new Date(`${user.age}`).getFullYear()} />)}
                                    </tbody>
                                </table>                                
                            </div>
                        </div>
                        <Modal title={'Добавить нового пользователя'} show={show} onClose={onClose}>
                            <div className="modal_body_main">
                                <form onSubmit={handleSubmit(handlerSubmit)}>
                                    <div className="modal_body_elem">
                                        <label htmlFor="username">Имя</label>
                                        <input ref={register} type="text" name="first_name" id="username" required />
                                        <span className="modal_body_elem_error">{errors.username && errors.username.message}</span>
                                    </div>
                                    <div className="modal_body_elem">
                                        <label id="sur_name">Фамилия</label>
                                        <input ref={register} type="text" name="sur_name" id="sur_name" required />
                                    </div>
                                    <div className="modal_body_elem">
                                        <label htmlFor="nickname">Никнейм</label>
                                        <input ref={register} type="text" name="nickname" id="nickname" required />
                                    </div>
                                    <div className="modal_body_elem">
                                        <label htmlFor="age">Возраст</label>
                                        <input ref={register} type="date" name="age" id="age" required />
                                    </div>
                                    <div className="modal_body_elem">
                                        <label htmlFor="email">E-mail</label>
                                        <input ref={register} type="email" name="email" id="email" required />
                                    </div>
                                    <div className="modal_body_elem">
                                        <label htmlFor="password">Пароль </label>
                                        <input ref={register} type="password" name="password" id="password" required />
                                        <span className="modal_body_elem_error">{errors.password && errors.password.message}</span>
                                    </div>
                                    <div className="modal_body_elem">
                                        <label htmlFor="passwordConfirm">Подтвердить пароль</label>
                                        <input ref={register} type="password" name="passwordConfirm" id="passwordConfirm" required />
                                        <span className="modal_body_elem_error">{errors.passwordConfirm && errors.passwordConfirm.message}</span>
                                    </div>
                                    <button type="submit" className="btn btn-success" disabled={registerUserStatus === Register.REGISTERING}>Добавить</button>
                                </form>
                            </div>
                        </Modal>
                    </div>
                </Route>
                <Route path={`/admin/users/:id`} component={Fullinfo} />
            </Switch>
        </>
    )
}
