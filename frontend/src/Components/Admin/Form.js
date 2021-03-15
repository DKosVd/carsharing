import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Goback } from './GoBack';

export function Form({ data, handleInput, handleSubmit, disabled }) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="block_form">
                <label htmlFor="name" className="mb-10">Имя</label>
                <input onInput={handleInput} type="text" name="first_name" id="name" value={`${data.first_name}`} />
            </div>
            <div className="block_form">
                <label htmlFor="Sname" className="mb-10">Фамилия</label>
                <input onInput={handleInput} type="text" name="sur_name" id="Sname" value={`${data.sur_name}`} />
            </div>
            <div className="block_form">
                <label htmlFor="email" className="mb-10">E-mail</label>
                <input onInput={handleInput} type="email" name="email" id="email" value={`${data.email}`} />
            </div>
            <div className="block_form">
                <label htmlFor="login" className="mb-10">Логин</label>
                <input onInput={handleInput} type="text" name="nickname" id="login" value={`${data.nickname}`} />
            </div>
            <div className="block_form">                
                <label>{data.confirmed ? 'Аккаунт подтвержден': <span>Подтвердить <input onInput={handleInput} name="confirmed" type="checkbox" id="active" value={1}/></span>}</label> 
            </div>
            <div>
                <Goback/>
                <button type="submit" className="btn btn-success" disabled={disabled}>
                    {disabled ? <CircularProgress size={18} /> : <span>Обновить</span>}
                </button>
            </div>
        </form>
    )
}
