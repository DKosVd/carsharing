import React from 'react'

function Datails(props) {
    const [active, setActive] = React.useState(false);
    const handleSetActive = () => {
        setActive(!active);
    }
    return (
        <>
            <div className="personal__item">
                <p onClick={handleSetActive} className="personal__detail">Заказ</p>
                {active && <div>
                    <p>Автомобиль: </p>
                    <p>Сумма к оплате: </p>
                    <p>Дата окончания проката: </p>
                </div> }
            </div>
        </>
    )
}

export default Datails;
