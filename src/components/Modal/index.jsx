import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import './modal.scss'

function Modal({ children, isOpen, className = "", handleClose }) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);
    

    if (isBrowser) {
        return ReactDOM.createPortal(
            <div
                onClick={handleClose}
                className={
                    `${'modal'} ${isOpen ? 'open' : 'close'}` +
                    " " +
                    className
                }
            >
                <div className={'modal__overlay'} />
                <div
                    className={'modal__content'}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={'modal__box'}>{children}</div>
                </div>
            </div>,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
}

export default Modal;

Modal.defaultProps = {
    children: "",
    hasClose: true,
    isOpen: false,
    hasOutsideClick: true,
};