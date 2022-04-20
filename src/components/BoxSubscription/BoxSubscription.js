
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const BoxSubscription = (props) => {

    const {
        className,
        subscriptionDetailURL = '',
        subscriptionTitle = '',
        subscriptionDownText = '',
        subscriptionDateText = '',
        subscriptionIMG = '',
        subscriptionIMGAlt = '',
        subscriptionStatus = '',
        subscriptionId = '',
        subscriptionDescription = '',
        unsubscribeEvent = '',
        modalShow = '',
        getSelectedProductData = '',
    } = props;

    

    // useEffect(() => {
    //     console.log('step modal:', subscriptionModalMessage);
    //     // setDeletionStep(subscriptionModalMessage);
    // }, [])
    

    return (
        <>
            {
                subscriptionDetailURL ?
                    <Link to={subscriptionDetailURL}>
                        <div className={`bf-box bf-box--type-1 bf-box--type-1--shadowed p-3 ${className ? className : ''}`}>
                            <div className={'d-flex justify-content-between'}>
                                <div>
                                    <h4 className={'text--title4'}><strong>{subscriptionTitle}</strong></h4>
                                    <span className={'text--body2 mt-1 d-block text--color-dark-blue-800'}>{subscriptionDownText}</span>
                                    {
                                        subscriptionDateText &&
                                        <span className={'text--tag mt-2'}>{subscriptionDateText}</span>
                                    }
                                </div>
                                <div>
                                    <img className={'bpl-img--subscription'} src={subscriptionIMG} alt={subscriptionIMGAlt} />
                                </div>
                            </div>
                            <div>

                                {
                                    subscriptionStatus === 'rejected' &&
                                    <div className={'d-flex align-items-center bf-border-top--gray-blue-200 pt-3 offset-top-2'}>
                                        <i className={'icon icon--alert-circle offset-right-1 text--color-rejected'}></i>
                                        <span className={'text--color-rejected text--body2'}><strong>Pago rechazado</strong></span>
                                    </div>
                                }
                                {
                                    subscriptionStatus === 'pending' &&
                                    <div className={'d-flex align-items-center bf-border-top--gray-blue-200 pt-3 offset-top-2'}>
                                        <i className={'icon icon--clock offset-right-1 text--color-pending text--title2'}></i>
                                        <span className={'text--color-pending text--body2'}>Pago pendiente</span>
                                    </div>
                                }
                                {
                                    subscriptionStatus === 'deleted' &&
                                    <div className={'d-flex align-items-center bf-border-top--gray-blue-200 pt-3 offset-top-2'}>
                                        <i className={'icon icon--lock offset-right-1 text--color-color-dark-blue-400 text--title2'}></i>
                                        <span className={'text--color-color-dark-blue-400 text--body2'}>Inactiva</span>
                                    </div>
                                }

                            </div>
                        </div>
                    </Link>
                    :
                    <div>
                        <div className={`bf-box bf-box--type-1 bf-box--type-1--shadowed p-3 ${className ? className : ''}`}>
                            <div className={'d-flex justify-content-between'}>
                                <div>
                                    <h4 className={'text--title4'}><strong>{subscriptionTitle}</strong></h4>
                                    {
                                        subscriptionDownText &&
                                        <span className={'text--body2 mt-1 d-block text--color-dark-blue-800'}>{subscriptionDownText}</span>
                                    }
                                    {
                                        subscriptionDateText &&
                                        <span className={'text--tag mt-2'}>{subscriptionDateText}</span>
                                    }
                                    {
                                        <button
                                            type={'button'}
                                            className={'btn btn--outline btn--xs mt-4'}
                                            onClick={() => {
                                                getSelectedProductData(subscriptionId,subscriptionIMG, subscriptionIMGAlt, subscriptionTitle);
                                                modalShow(true);
                                            }}
                                        >
                                            Eliminar suscripción
                                        </button>
                                    }
                                </div>
                                <div>
                                    <img className={'bpl-img--subscription'} src={subscriptionIMG} alt={subscriptionIMGAlt} />
                                </div>
                            </div>
                            <div>

                                {
                                    subscriptionStatus === 'rejected' &&
                                    <div className={'d-flex align-items-center bf-border-top--gray-blue-200 pt-3 offset-top-2'}>
                                        <i className={'icon icon--alert-circle offset-right-1 text--color-rejected'}></i>
                                        <span className={'text--color-rejected text--body2'}><strong>Pago rechazado</strong></span>
                                    </div>
                                }
                                {
                                    subscriptionStatus === 'pending' &&
                                    <div className={'d-flex align-items-center bf-border-top--gray-blue-200 pt-3 offset-top-2'}>
                                        <i className={'icon icon--clock offset-right-1 text--color-pending text--title2'}></i>
                                        <span className={'text--color-pending text--body2'}>Pago pendiente</span>
                                    </div>
                                }
                                {
                                    subscriptionStatus === 'deleted' &&
                                    <div className={'d-flex align-items-center bf-border-top--gray-blue-200 pt-3 offset-top-2'}>
                                        <i className={'icon icon--lock offset-right-1 text--color-color-dark-blue-400 text--title2'}></i>
                                        <span className={'text--color-color-dark-blue-400 text--body2'}>Inactiva</span>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>

            }

        </>
    )
}

export default BoxSubscription;
