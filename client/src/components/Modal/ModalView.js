import React from 'react';
import DataPicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function ModalView({ handleSubmit,count, fullname, src_img, type, type_kpp, transmission, price_day, close, handleOnChange,handlerSelect, handleAccept, Add, isAuth, accept, day, choiseDay }) {

    return (
        <>
            <div className="ModalWindow" onClick={close}>
                <div className="Modal">
                    <div className="ModalClose">
                        <span className="close" ></span>
                    </div>
                    <div className="ModalContent">
                        <div className="ModalHeader">
                            <h3>{fullname}</h3>
                        </div>
                        <div className="ModalBody">
                            <img className="ModalBody__img" src={src_img}/>
                            {count ? <div className="ModalBody__desc">
                                <p>Тип: {type} </p>
                                <p>Коробка передач: {type_kpp}</p>
                                <p>Привод: {transmission}</p>
                                {isAuth ? <div className="ModalBody__managment">
                                <span>Выберите дату начала проката:</span>
                                <div>
                                <DataPicker 
                                        selected={+new Date()}
                                        minDate={+new Date()}
                                        onSelect={handlerSelect}
                                        className={'dataPickerInput'}
                                        disabled={!day}
                                    /></div> 
                                    <label><input type="radio" name="price" value={price_day} onChange={handleOnChange} data-id="day" />Подписка на день: {price_day}</label><br />
                                    <label><input type="radio" name="price" value={Math.floor(price_day/2)} onChange={handleOnChange} data-id="month" />Подписка на 30 дней(цена за 1 день): {Math.floor(price_day/2)}</label><br />
                                    <label><input type="radio" name="price" value={Math.floor(price_day/3)} onChange={handleOnChange} data-id="three-month" />Подписка на 90 дней(цена за 1 день): {Math.floor(price_day/3)}</label><br />
                                    <label><input type="radio" name="price" value={Math.floor(price_day/4)} onChange={handleOnChange} data-id="six-month" />Подписка на 180 дней(цена за 1 день): {Math.floor(price_day/4)}</label><br />
                                    <p>Итоговая цена: {choiseDay}</p>
                                    <label><input type="Checkbox" onClick={handleAccept} />Вы соглашаетесь с условиями</label>
                                    <div className="ModalBody__accepted">
                                        {(accept && choiseDay) && <button className="ModalBody__btn" onClick={handleSubmit} >Забронировать</button>}
                                        {Add && <p>Автомобиль забронирован</p>}
                                    </div>
                                </div> : <p>Авторизуйтесь, чтобы забронировать автомобиль</p>}
                            </div> : <p>Машины нет в наличии</p>}
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default ModalView;
