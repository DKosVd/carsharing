import React from 'react';
import { Formik } from 'formik';
import { setUsers, registerNewUser } from '../../store/reducers/loginpage';
import Login from '../Login/Login';

const LoginAndRegisterView = ({valSchema, validationSchema, dispatch, state}) => {
    return (
        <div className="container">
            <div className="logingAndReg">
                {(!state.isAuth && <>
                <Formik initialValues={
                    {
                        email: '',
                        password: '',
                    }
                }
                    validateOnBlur
                    validationSchema={validationSchema}
                    onSubmit={(values,) => dispatch(setUsers(values))
                }
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                        <div className="logingAndReg Login">
                            <div>
                                <label htmlFor={"email"}>Email</label><br />
                                <input
                                    type="text"
                                    name={"email"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>
                            { (errors.email && touched.email || state.errorWithEmail) && <p className={'error'}>{errors.email || state.errorWithEmail}</p>}
                            <div>
                                <label htmlFor={"password"}>Password</label><br />
                                <input
                                    type="password"
                                    name={"password"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </div>
                            { (errors.password && touched.password || state.errorWithPassword) && <p className={'error'}>{errors.password ||  state.errorWithPassword}</p>}
                            <button
                                className="logingAndReg__btn"
                                type="submit"
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}>Авторизоваться</button>
                        </div>
                    )}
                </Formik>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                    }}
                    validateOnBlur
                    validationSchema={valSchema}
                    onSubmit={(values, {resetForm}) => { 
                        dispatch(registerNewUser(values))
                        resetForm({values:''})
                        }
                    }
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                        <div className="logingAndReg Reg">
                             <div>
                                <label htmlFor="name">Name</label><br/>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name} />
                             </div>
                            { errors.name && touched.name && <p className={'error'}>{errors.name}</p>}
                            <div>
                                <label htmlFor="email">Email</label><br/>
                                <input
                                    type="text"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email} />
                             </div>
                            { (errors.email && touched.email || state.emailExist) && <p className={'error'}>{errors.email || state.emailExist}</p>}
                            <div>
                                <label htmlFor="name">Password</label><br/>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password} />
                            </div>
                            { errors.password && touched.password  && <p className={'error'}>{errors.password}</p>}
                            <button
                                className="logingAndReg__btn"
                                type="submit"
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}>Зарегистрироваться</button>
                            {state.register && <p className={'register'}>Пользователь зарегистрирован</p>}
                        </div>
                    )}
                </Formik>
                </>) || (state.isAuth && <>
                <Login {...state}/>
                </>)}
            </div>
        </div>
    )
}

export default LoginAndRegisterView;