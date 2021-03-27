import React from 'react'
import { useSelector } from 'react-redux'
import { prepareDate } from '../../utils/prepareDate'

export default function Profile(props) {
    const {currentUser} = useSelector(state => state.currentUser)

    return (
        <div className="personal_account">
            <p className="title">Профиль</p>
            <div className="personal_account_info">
                <div className="personal_account_ns">
                    <p>{currentUser.first_name} {currentUser.sur_name}</p>
                    <p>Возраст: {prepareDate(new Date(), new Date(`${currentUser.age}`))}</p>
                    <p>E-mail: {currentUser.email}</p>
                    <p>Никнейм: {currentUser.nickname}</p>
                </div>
            </div>
        </div>
    )
}
