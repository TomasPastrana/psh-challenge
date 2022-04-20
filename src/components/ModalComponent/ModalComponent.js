

import React from 'react'
import Modal from 'react-bootstrap/Modal';

const ModalComponent = (props) => {
    const {children, className} = props;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            className={`bf-modal ${className ? className : ''}`}
            children
            centered
            >
            <div className={'bf-modal--content'}>
                <div className={'bf-modal--header'}>
                    <button onClick={props.onHide} className={'bf-modal--close-button'}><i className={'icon--close'}></i></button>
                </div>
                <div className={'bf-modal--info'}>
                    {children}
                </div>
            </div>
        </Modal>
    )
}

export default ModalComponent;
