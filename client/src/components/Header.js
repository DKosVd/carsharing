import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__row">
                        <ul className="header__items">
                            <Link className="header__item" to='/main'>
                            <li >
                                <div className="header__logo"></div>
                            </li>
                            </Link>
                            <Link className="header__item" to='/main'><li >Main</li></Link>
                            <Link className="header__item" to='/services'><li >Services</li></Link>
                            <Link className="header__item" to='/about'><li>About</li></Link>
                            <Link className="header__item" to='/contacts'><li>Contacts</li></Link>
                            <Link className="header__item" to='/login'><li>Login</li></Link>
                        </ul>
                    </div>
                    <div className="header__image">
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;