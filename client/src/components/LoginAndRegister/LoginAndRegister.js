import React from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import LoginAndRegisterView from './LoginAndRegisterView';


const LoginAndRegister = () => {
    const validationSchema = yup.object().shape({
        email: yup.string().email('Введите верный email').required('Обязательное поле'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    })

    const valSchema = yup.object().shape({
        email: yup.string().email('Введите верный email').required('Обязательное поле'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        name: yup.string().required('Обязательное поле'),
    })
    const dispatch = useDispatch();
    const state = useSelector(state => state.loginpage)

    return (
       <LoginAndRegisterView valSchema={valSchema} validationSchema={validationSchema} dispatch={dispatch} state={state}/>
    )
}

export default LoginAndRegister;