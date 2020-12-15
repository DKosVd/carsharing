import React from 'react'
import { setCars } from '../../store/reducers/mainpage';
import { useDispatch, useSelector } from 'react-redux';
import { Setcookie } from '../../store/reducers/loginpage';
import MainView from './MainView';



function Main(props) {
    const [active, setActive] = React.useState(0); //state redux
    const { cars, isLoading, tabs} = useSelector(state => state.mainpage);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(setCars(tabs[active]))
        dispatch(Setcookie())
    }, [active])


    return (
            <MainView setActive={setActive} cars={cars} isLoading={isLoading} tabs={tabs} active={active}/>
    )
}

export default Main;
