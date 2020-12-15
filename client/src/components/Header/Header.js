import React from 'react'
import { useSelector } from 'react-redux';
import HeaderView from './HeaderView';

function Header(props) {
    const  { isAuth }  = useSelector(state => state.loginpage)
    return (
       <HeaderView isAuth={isAuth}/>
    )
}

export default Header;
