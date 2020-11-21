import React from 'react'

function Datails({DateBefore, name_mark, price}) {
    const [active, setActive] = React.useState(false);
    const handleSetActive = () => {
        setActive(!active);
    }
    return (
        <>
            <div className="personal__item">
                <p onClick={handleSetActive} className="personal__detail">Заказ {name_mark}</p>
                {active && <div>
                    <p>Автомобиль: {name_mark}</p> 
                    {/* Модель машины */}
                    <p>Сумма к оплате: {price}</p>
                    <p>Дата окончания проката: {DateBefore}</p>
                </div> }
            </div>
        </>
    )
}

export default Datails;
