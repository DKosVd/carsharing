import React from 'react'
import { setCars } from '../store/reducers/mainpage';
import ItemForMain from './ItemForMain';
import { useDispatch, useSelector } from 'react-redux';
import Cars from './Cars';
import MyLoader from './PreloaderForCars';
import { Setcookie } from '../store/reducers/loginpage';
import Tab from './Tab';


function Main(props) {
    const [active, setActive] = React.useState(0); //state redux
    const { cars, isLoading, tabs} = useSelector(state => state.mainpage);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(setCars(tabs[active]))
        dispatch(Setcookie())
    }, [active])


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

export default Main;
