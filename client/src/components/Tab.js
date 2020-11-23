import React from 'react'

function Tab(props) {
    return (
        <>
            <div className={`${'main__tab'} ${props.className}` } onClick={props.handleClickActive}> {props.tab} </div>
        </>
    )
}

export default Tab;
