import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../../store/actions/user/user';
import { Updating } from '../../../store/reducers/user/state';
import { Form } from '../Form';

export default function Edituser(props) {
    //TODO: Сделать валидацию
    const dispatch = useDispatch();
    const [change, setChange] = React.useState(false)
    const user = useSelector(state => state.user.user);
    const [data, setData] = React.useState({ ...user })
    const updateStatus = useSelector(state => state.user.UpdateStatus);
    const handleInput = (e) => {
        setChange(true)
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(change){
            dispatch(updateUser(data))
            return
        }
        return
    }

  
    return (
        <>
            <p className="title">Редактирование пользователя</p>
            <div className="edit">
                <div className="edit_user">
                    <Form data={data} handleInput={handleInput} handleSubmit={handleSubmit} disabled={updateStatus === Updating.UPDATING} />
                </div>
            </div>
        </>
    )
}
