import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'

function Services(props) {


    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className="services">
                        <div className="services__taxi taxi">
                            <div className="taxi__title">VIP TAXI</div>
                            <div className="taxi__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, temporibus.</div>
                        </div>
                        <div className="services__rent rent">
                            <div className="rent__title">Отдать Авто в аренду</div>
                            <div className="rent__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non doloremque reiciendis vel qui quasi voluptatibus.</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Services;
