import React from 'react';

function Modal(props) {


    return (
        <>
            <div className="ModalWindow" onClick={props.close}>
                <div className="Modal">
                    <div className="ModalClose">
                        <span className="close" ></span>
                    </div>
                    <div className="ModalBody">
                    {props.text}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;
