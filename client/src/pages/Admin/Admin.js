import React from 'react';
import Nav from '../../components/Admin/Nav/Nav';
import Form from '../../components/Admin/Form/Form';
import Users from '../../components/Admin/Users/Users';
import './admin.css';
import Header from '../../components/Admin/HeaderForAdmin/Header';


export default function Main(props) {
    return (
        <>
             <Header/>
             <div className="mainAdmin">
               <Nav/>
                <div className="contentAdmin">
                  <Form/>
                  <Users/>
                </div>
            </div>
        </>
    )
}
