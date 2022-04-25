

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const BFModal = (props) => {

    const {
        className = '',
        children = '',
        show = false,
        defaultClose = true,
        onHide = true,
        closeOuter = false
    } = props;

    const [modalOpen, setModalOpen] = useState(false);
    const [createModal, setCreateModal] = useState(false);
    const [modalFadeIn, setModalFadeIn] = useState(false);

    const handleModalClose = () => {
        setModalFadeIn(false);
        let initModalFadeOut = setTimeout(() => {
            setCreateModal(false);
            setModalOpen(false);
            onHide(false);
            clearTimeout(initModalFadeOut);
        }, 500);
    }

    useEffect(() => {
        let initModalFadeIn;
        let initModalFadeOut;
        if (modalOpen || show) {
            setCreateModal(true);
            initModalFadeIn = setTimeout(() => {
                setModalFadeIn(true);
                clearTimeout(initModalFadeIn);
            }, 100);
        } else {
            setModalFadeIn(false);
            initModalFadeOut = setTimeout(() => {
                setCreateModal(false);
                clearTimeout(initModalFadeOut);
            }, 600);
        }
        return () => {
            clearTimeout(initModalFadeIn);
            clearTimeout(initModalFadeOut);
        }

    }, [modalOpen, show]);

    const modalBuild = () => {
        return (
            <div className={`psh-modal ${modalFadeIn ? 'active' : ''} ${className}`}>
                <div className={'psh-modal__box'}>
                    <div className={'psh-modal__cont'}>
                        {
                            defaultClose &&
                            <div>
                                <button
                                    className={'psh-modal__close-button'}
                                    type={'button'}
                                    onClick={handleModalClose}
                                >
                                    <span>
                                        <i className={'icon--close'}></i>
                                    </span>
                                </button>
                            </div>
                        }
                        {
                            children
                        }
                    </div>
                </div>
                {
                    closeOuter &&
                    <div
                        className={'psh-modal__button-close-outer'}
                        onClick={handleModalClose}
                    ></div>
                }
            </div>
        )
    }

    return (
        <>
            {
                createModal &&
                ReactDOM.createPortal(modalBuild(), document.querySelector('body'))
            }
        </>
    )
}

export default BFModal;
