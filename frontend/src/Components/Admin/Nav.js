import React from 'react'
import PeopleIcon from '@material-ui/icons/People';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {  Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <>
            <nav className="nav_menu">
                <div className="logo_nav_menu">
                    <AirportShuttleIcon style={{ fontSize: 40 }} />
                </div>
                <ul className="nav_elems">
                    <Link to={`/admin/users`}>
                        <li className="nav_elem">
                            <span className="left-top"></span>
                            <span className="right-top"></span>
                            <span className="left-bottom"></span>
                            <span className="right-bottom"></span>
                            <PeopleIcon />
                            <span className="nav_elem_text">Пользователи</span>
                        </li>
                    </Link>
                    <Link to={`/admin/autos`}>
                    <li className="nav_elem">
                        <span className="left-top"></span>
                        <span className="right-top"></span>
                        <span className="left-bottom"></span>
                        <span className="right-bottom"></span>
                        <DriveEtaIcon /><span className="nav_elem_text">Автомобили</span>
                    </li>
                    </Link>
                    <Link to={`/admin/orders`}>
                    <li className="nav_elem">
                        <span className="left-top"></span>
                        <span className="right-top"></span>
                        <span className="left-bottom"></span>
                        <span className="right-bottom"></span>
                        <ShoppingBasketIcon /><span className="nav_elem_text">Заказы</span>
                    </li>
                    </Link>
                    <Link to={`/admin/dashboard`}>
                    <li className="nav_elem">
                        <span className="left-top"></span>
                        <span className="right-top"></span>
                        <span className="left-bottom"></span>
                        <span className="right-bottom"></span>
                        <ShowChartIcon /><span className="nav_elem_text">Статистика</span>
                    </li>
                    </Link>
                </ul>
            </ nav>
        </>
    )
}
