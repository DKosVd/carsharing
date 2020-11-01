import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Login from '../components/Login'
import LoginAndRegister from '../components/LoginAndRegister'

function LoginPage(props) {
    

    return (
        <>
        <Header/>
        {/* <Login/> */}
        <LoginAndRegister/>
        <Footer/>
        </>
    )
}

export default LoginPage;
