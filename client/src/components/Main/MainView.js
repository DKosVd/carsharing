import React from 'react'
import ItemForMain from '../ItemForMain';
import Cars from '../Cars/Cars';
import MyLoader from '../Preloaders/PreloaderForCars';
import Tab from '../Tab';


function MainView({isLoading, cars, tabs, setActive, active}) {
    return (
        <div className="main"> 
        <div className="container">
            <div className="main__actions">
                <div className="main__row">
                    <div className="main__items">
                        <ItemForMain name={['VIP TAXI', 'Сдать авто в аренду']}/>
                    </div>
                </div>
            </div>
            <div className="main__autopark">
                <div className="main__title">Автопарк</div>
                <div className="main__tabs">
                    {tabs.map( (tab, index) => <Tab key={`${index}__${tab}`} tab={tab} handleClickActive={() => setActive(index)} className={active === index ? 'main__tab_choose': ''}/>)}
                </div>
                
                <div className="main__cars">
                    { !isLoading ? Array(8).fill(null).map(item => <div className="main__car car"><MyLoader  /></div>): 
                    <>{cars && cars.map( (car, index) => <Cars key={`${car}__${index}`} {...car} button={true} />)}</>
                        }
                </div>
                
            </div>
        </div>
    </div>  
    )
}

export default MainView;
