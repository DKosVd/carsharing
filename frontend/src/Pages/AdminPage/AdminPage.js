import React from 'react';
import './admin.css'
import { Route, Switch } from 'react-router-dom';

import Nav from '../../Components/Admin/Nav';
import Header from '../../Components/Admin/Header';
import Profile from '../../Components/Admin/Profile';
import Table from '../../Components/Admin/Users/Table';
import Cars from '../../Components/Admin/Cars/Cars';
import { ChangePassword } from '../../Components/Admin/ChangePassword';
import { Orders } from '../../Components/Admin/Orders/Orders';
import { Stat } from '../../Components/Admin/Stat/Stat';

export default function Admin() {

    return (
        <div className="container">
            <Nav />
            <div className="main">
                <Header />
                <Switch>
                    <Route exact path={`/admin`} component={Profile} />
                    <Route path={`/admin/users`} component={Table} />
                    <Route path={`/admin/autos`} component={Cars} />
                    <Route path={`/admin/dashboard`} component={Stat} />
                    <Route path={`/admin/settings`} component={ChangePassword} />
                    <Route path={'/admin/orders'} component={Orders} />
                </Switch>
            </div>
        </div>
    )
}