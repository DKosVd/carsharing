import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { logOut } from '../../store/actions/currentUser/currentUser';

export default function Header(props) {
    const dispatch = useDispatch();

    const LogOut = () => {
        dispatch(logOut())
    }

    return (
        <>
             <header className="header">
                    <ul className="header_row">
                        <li className="header_item header_item_avatar">
                        </li>
                        <li className="header_item" onClick={LogOut}>
                            Выйти
                        </li>
                        <Link to="/admin/settings">
                        <li className="header_item">
                           Изменить пароль
                        </li>
                        </Link>
                        <Link to="/admin">
                        <li className="header_item">
                            Профиль
                        </li>
                        </Link>
                    </ul>
                </header>
        </>
    )
}
