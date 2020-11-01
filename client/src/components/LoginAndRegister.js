import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

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


    return (
        <div className="container">
            <div className="logingAndReg">
                <Formik initialValues={
                    {
                        email: '',
                        password: '',
                    }
                }
                    validateOnBlur
                    validationSchema={validationSchema}
                    onSubmit={(values) => console.log(values)}
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
                            { errors.email && touched.email && <p className={'error'}>{errors.email}</p>}
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
                            { errors.password && touched.password && <p className={'error'}>{errors.password}</p>}
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
                    onSubmit={(values) => console.log(values)}
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
                            { errors.email && touched.email && <p className={'error'}>{errors.email}</p>}
                            <div>
                                <label htmlFor="name">Password</label><br/>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password} />
                            </div>
                            { errors.password && touched.password && <p className={'error'}>{errors.password}</p>}
                            <button
                                className="logingAndReg__btn"
                                type="submit"
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}>Зарегистрироваться</button>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default LoginAndRegister;