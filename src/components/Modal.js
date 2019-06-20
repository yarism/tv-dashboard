import React from 'react';

const Modal = props => {
    return (
        <div className={"modal " + (props.show ? "modal--show " : "")}>
            <div className="modal__content">
                {props.children}
            </div>
        </div>
    )
}

export default Modal;