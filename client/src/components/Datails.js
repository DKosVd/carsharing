import React from 'react'


function Datails({DateBefore, name_mark, price, DateAfter}) {
    const [active, setActive] = React.useState(false);
    const handleSetActive = () => {
        setActive(!active);
    }
    const dateFormDb = new Date(DateAfter);
    const localDate = new Date();
    return (
        <>
            <div className="personal__item">
                <p onClick={handleSetActive} className={`'personal__detail' ${dateFormDb - localDate ? 'personal__item_success': 'personal__item_wrong'}` }>Заказ {name_mark}</p>
                {active && <div>
                    <p>Автомобиль: {name_mark}</p> 
                    {/* Модель машины */}
                    <p>Сумма к оплате: {price}</p>
                    <p>Дата начала проката: {DateBefore.slice(0, 10)}</p>
                    <p>Дата окончания проката: {DateAfter.slice(0, 10)}</p>
                </div> }
            </div>
        </>
    )
}

export default Datails;
