import React from 'react'
import './adminSignIn.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { SignIn } from '../../store/actions/currentUser/currentUser';


const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
})

export default function Adminsignin(props) {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    })

    const dispatch = useDispatch()

    const handlerSubmit = (info) => {
        dispatch(SignIn(info))
    }

    return (
        <div className="wrapper_admin_form">
            <div className="admin_form shadow_for_div">
                <h3>Admin</h3>
                <form onSubmit={handleSubmit(handlerSubmit)}>
                    <div>
                        <label>
                            <p className={`${errors.login ? 'error' : ''}`}>Логин</p>
                            <input name="username" ref={register} type="text" />
                            {errors.username && <p>{errors.username.message}</p>}
                        </label>
                    </div>
                    <div>
                        <label>
                            <p className={`${errors.password ? 'error' : ''}`}>Пароль</p>
                            <input name="password" ref={register} type="password" />
                            {errors.password && <p>{errors.password.message}</p>}
                        </label>
                    </div>
                    <button type="submit">Войти</button>
                </form>
            </div>
        </div>
    )
}
