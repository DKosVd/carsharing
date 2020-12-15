import React from 'react'
import DatailsView from './DatailsView';

function Datails({DateBefore, name_mark, price, DateAfter}) {
    const [active, setActive] = React.useState(false);
    const handleSetActive = () => {
        setActive(!active);
    }
    DateAfter = DateAfter.slice(0, 10);
    DateBefore = DateBefore.slice(0, 10);
    const diff = new Date(DateAfter) - new Date();
    return (
        <>
        <DatailsView toogleActive = {handleSetActive} active = {active} DateAfter={DateAfter} DateBefore={DateBefore} diff = {diff} name_mark={name_mark} price={price}/>
        </>
    )
}

export default Datails;
