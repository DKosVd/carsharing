import React from 'react'
import { setCars } from '../store/reducers/mainpage';
import ItemForMain from './ItemForMain';
import { useDispatch, useSelector } from 'react-redux';
import Cars from './Cars';

function Main(props) {
    const [active, setActive] = React.useState(0);
    const { cars, tabs } = useSelector(state => state.mainpage);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(setCars(tabs[active]))
    }, [active])


    return (
        <div className="main"> 
        <div className="container">
            <div className="main__actions">
                <div className="main__row">
                    <div className="main__items">
                        <ItemForMain name={['Автопарк', 'VIP TAXI', 'Сдать авто в аренду']}/>
                    </div>
                </div>
            </div>
            <div className="main__autopark">
                <div className="main__title">Автопарк</div>
                <div className="main__tabs">
                    {tabs && tabs.map( (tab, index) => <div className={`${'main__tab'} ${active === index ? 'main__tab_choose': ''}`} onClick={() => setActive(index)}  key={`${tab}__${index}`}>{ tab }</div>)}
                </div>
                <div className="main__cars">
                    {cars && cars.map( (car, index) => <Cars key={`${car}__${index}`} {...car}/>)}
                </div>
            </div>
        </div>
    </div>  
    )
}

export default Main;
