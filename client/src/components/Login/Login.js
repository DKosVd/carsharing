import { LogOut } from '../../store/reducers/loginpage';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SetHistoryOrders } from '../../store/reducers/order';
import LoginView from './LoginView';

function Login(res) {
    const dispatch = useDispatch();
    const [active, setActive] = React.useState(false)
    const { history } = useSelector(state => state.order)
    const itemHistory = React.useRef();
    const LogOutButton = () => {
        dispatch(LogOut());
    }
    const handlerHistoryOrder = React.useCallback(() => {
        dispatch(SetHistoryOrders(res.id));
    }, [res.id])

    React.useEffect( () => {
        const { current } = itemHistory;
        current.addEventListener('click', handlerHistoryOrder)
        history.length && current.removeEventListener('click', handlerHistoryOrder)
    }, [history])

    const handlerSetOrders = () => {
        setActive(!active);
    }
    
    return (
        <>
         <LoginView name={res.name} history={history} active={active} handlerSetOrders={handlerSetOrders} LogOutButton={LogOutButton} itemHistory={itemHistory}/>
        </>
    )
}

export default Login;
