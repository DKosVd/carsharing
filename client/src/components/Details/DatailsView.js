import React from 'react'


function DatailsView({DateBefore, name_mark, price, DateAfter, toogleActive, diff, active}) {
    return (
        <>
            <div className="personal__item">
                <p onClick={toogleActive} className={`'personal__detail' ${ diff >  0 ? 'personal__item_success': 'personal__item_wrong'}` }>Заказ {name_mark}</p>
                {active && <div>
                    <p>Автомобиль: {name_mark}</p> 
                    <p>Сумма к оплате: {price}</p>
                    <p>Дата начала проката: {DateBefore}</p>
                    <p>Дата окончания проката: {DateAfter}</p>
                </div> }
            </div>
        </>
    )
}

export default DatailsView;
