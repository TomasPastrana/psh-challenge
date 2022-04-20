
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BFModal from 'components/BFModal/BFModal';
import BFFade from 'components/BFFade/BFFade';

import imgAccidentInsurance from 'assets/img/img-seguro-accidentes.png';
import cardLogoVisa from 'assets/img/card-logos/logo-visa.svg';
import cardLogoMastercard from 'assets/img/card-logos/logo-mastercard.svg';

const BoxSubscriptionDetail = (props) => {
    const {
        className = '',
        subscriptionStatus = '',
        subscriptionTotal = '',
        subscriptionStartDate = '',
        subscriptionPaymentDate = '',
        subscriptionRenewalDate = '',
        subscriptionEmail = '',
        paymentType = '',
        subscriptionCardBrandIMG = '',
        subscriptionCardNumber = '',
        subscriptionName = '',
        actionButtons = true,
    } = props;

    // console.log(className, subscriptionStatus, subscriptionTotal,subscriptionStartDate, subscriptionPaymentDate, subscriptionRenewalDate, subscriptionEmail, paymentType, subscriptionCardBrandIMG,subscriptionCardNumber, subscriptionName, actionButtons);

    //Modal behaviours
    const [modalOne, setModalOne] = useState(false);
    const [modalTwo, setModalTwo] = useState(false);

    //Modal delete subscription state
    const [deletionStep, setDeletionStep] = useState(0);

    const handleDeletionStepNext = () => {
        if(deletionStep === 0){
            setDeletionStep(1);
        }
        if(deletionStep === 1){
            setModalTwo(false);
            let timeToEnd = setTimeout(()=>{
                setDeletionStep(0);
                clearTimeout(timeToEnd);
            },500)
        }
    }

    const handleShowCardBrandType = (cardBrand)=>{
        if(cardBrand === 'visa'){
            return <img src={cardLogoVisa} alt={'Visa logo'} />
        }
        if(cardBrand === 'mastercard'){
            return <img src={cardLogoMastercard} alt={'Mastercard logo'} />
        }
    }

    return (
        <>
            <div className={`bf-box bf-box--type-3 ${className}`}>

                <div className={'d-flex flex-column flex-sm-row justify-content-between'}>
                    <div className={'bf-box--type-3__highlight'}>
                        <div className={'bf-box--type-3__highlight--icon'}>

                            {
                                subscriptionStatus === 'success' &&
                                <div className={'bf-circle bf-circle--7 bf-circle--type-success'}>
                                    <i className={'icon icon--check-thin'}></i>
                                </div>
                            }

                            {
                                subscriptionStatus === 'rejected' &&
                                <div className={'bf-circle bf-circle--7 bf-circle--type-rejected'}>
                                    <i className={'icon icon--alert-circle'}></i>
                                </div>
                            }
                            {
                                subscriptionStatus === 'pending' &&
                                <div className={'bf-circle bf-circle--7 bf-circle--type-pending'}>
                                    <i className={'icon icon--clock'}></i>
                                </div>
                            }

                        </div>
                        <div>
                            {
                                subscriptionStatus === 'success' &&
                                <span className={'d-block text--color-dark-blue-600'}>Total pagado</span>
                            }
                            {
                                subscriptionStatus === 'rejected' &&
                                <span className={'d-block text--color-dark-blue-600'}>Pago rechazado</span>
                            }
                            {
                                subscriptionStatus === 'pending' &&
                                <span className={'d-block text--color-dark-blue-600'}>Pago pendiente</span>
                            }
                            <span className={'h5 permanent-size text--color-dark-blue-800 text--center d-block d-sm-inline'}><strong>{subscriptionTotal ? subscriptionTotal : ''}</strong></span>
                        </div>
                    </div>
                    <div className={'flex-grow-1'}>
                        <div className={'d-flex justify-content-between bf-as-table'}>
                            <div>
                                <span className={'d-block text--body2 text--color-dark-blue-600'}>Inicio de la suscripción</span>
                                <span className={'text--body2 text--color-dark-blue-800'}><strong>{subscriptionStartDate}</strong></span>
                            </div>
                            <div>
                                <span className={'d-block text--body2 text--color-dark-blue-600'}>Día de cobro</span>
                                <span className={'text--body2 text--color-dark-blue-800'}><strong>{subscriptionPaymentDate}</strong></span>
                            </div>
                        </div>
                        <div className={'d-flex justify-content-between bf-as-table offset-top-2'}>
                            {
                                subscriptionRenewalDate &&
                                <div>
                                    <span className={'d-block text--body2 text--color-dark-blue-600'}>Fecha de renovación</span>
                                    <span className={'text--body2 text--color-dark-blue-800'}><strong>{subscriptionRenewalDate}</strong></span>
                                </div>
                            }
                            <div>
                                <span className={'d-block text--body2 text--color-dark-blue-600'}>Email</span>
                                <span className={'text--body2 text--color-dark-blue-800 text--break'}><strong>{subscriptionEmail}</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'bf-box bf-box--type-2 offset-top-4 d-flex justify-content-between align-items-center'}>
                    <div className={'d-flex align-items-center'}>
                        <div className={'mr-3'}>
                            {
                                subscriptionCardBrandIMG === 'default' || !subscriptionCardBrandIMG ? 
                                    <i className={'icon icon--credit-card h5 text--color-secondary'}></i>
                                :
                                    handleShowCardBrandType(subscriptionCardBrandIMG)
                            }
                        </div>
                        <div>
                            <span className={'d-block text--body2 text--color-dark-blue-600'}>Tipo de pago / {paymentType}</span>
                            <span className={'d-block text--body2 text--color-dark-blue-800'}>{subscriptionCardBrandIMG.toUpperCase()} ****{subscriptionCardNumber}</span>
                        </div>
                    </div>
                    <div>
                        {
                            actionButtons && 
                            <>
                                {
                                    subscriptionStatus === 'success' &&
                                    <Link to={'/account/payment-methods'} className={'text--link'}><span><strong>Cambiar tarjeta</strong></span></Link>
                                }
                                {
                                    subscriptionStatus === 'rejected' &&
                                    <Link to={'/account/payment-methods'} className={'btn btn--secondary btn--md'}><span><strong>Cambiar medio de pago</strong></span></Link>
                                }
                                {
                                    subscriptionStatus === 'pending' &&
                                    <span className={'text--body2 text--color-gray-blue-1000'}><strong>Cambiar tarjeta</strong></span>
                                }
                            </>
                        }
                        

                    </div>
                </div>

            </div>
            
            {
                actionButtons && 
                <>
                    <div className={'d-flex justify-content-end offset-top-2'}>
                        {
                            subscriptionStatus === 'rejected' &&
                            <button
                                className={'btn btn--outline btn--md'}
                                type={'button'}
                                onClick={() => setModalOne(true)}
                            >
                                Ver causas del rechazo
                            </button>
                        }
                        {
                            (subscriptionStatus === 'success' || subscriptionStatus === 'pending') &&
                            <button
                                className={'btn btn--outline btn--md'}
                                type={'button'}
                                onClick={() => setModalTwo(true)}
                            >
                                Eliminar suscripción
                            </button>
                        }
                    </div>
                </>
            }

            <BFModal
                show={modalOne}
                onHide={() => setModalOne(false)}
                className={'bf-modal--md'}
            >
                <div className={'d-flex justify-content-center'}>
                    <div className={'col-md-10'}>
                        <h4 className={'text--title2 text--center'}><strong>Causas del rechazo</strong></h4>

                        <div className={'text--center mt-4'}>
                            <p className={'text--color-dark-blue-800 text--title3'}>
                                Estas son las posibles causas por las cuales
                                tu pago no se pudo procesar:
                            </p>
                        </div>

                        <div className={'d-flex justify-content-center mt-4 offset-bottom-2'}>
                            <ul className={'bf-list bf-list--bullets text--color-dark-blue-800'}>
                                <li>El proveedor no responde</li>
                                <li>No tiene fondo en la tarjeta</li>
                                <li>Tu tarjeta expiró</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </BFModal>



            <BFModal
                show={modalTwo}
                onHide={() => setModalTwo(false)}
                className={'bf-modal--md'}
            >
                <div className={'d-flex justify-content-center'}>
                    <div className={'col-md-10'}>

                        {
                            deletionStep === 0 &&
                            <>
                                <h4 className={'text--title2 text--center'}><strong>Eliminar método de pago</strong></h4>
                                <div className={'offset-top-3'}>
                                    <p className={'text--center text--title4 text--color-dark-blue-800'}>
                                        ¿Estás seguro de que quieres eliminar esta suscripción?
                                    </p>
                                </div>
                                <div className={'bf-alert bf-alert--outline bf-alert--outline--warning mt-4'}>
                                    <div className={'d-flex align-items-center'}>
                                        <div className={'d-flex justify-content-center align-items-center p-3 bf-border-right--warning'}>
                                            <i className={'icon icon--warning text--title2 text--color-vivid-orange-1000'}></i>
                                        </div>
                                        <div className={'pl-3 pr-3 text--color-dark-blue-800'}>
                                            <span className={'text--body4'}><strong>Si eliminas esta suscrispanción perderás</strong></span>
                                            <p className={'text--body4 text--color-dark-blue-800'}>
                                                Protección ante un accidente que te cause invalidez
                                                parcial o total. Un reembolso ante cualquier actividad
                                                de riesgo, sin importar tu ocupación, aficiones de alto
                                                riesgo o el deporte que te guste practicar.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={'d-flex justify-content-center offset-top-3'}>
                                    <p className={'text--color-dark-blue-800'}><strong>¡Dejarás de tener protección contra accidentes</strong> 😩<strong>!</strong></p>
                                </div>

                                <div className={'bf-alert bf-alert--disabled text--center mt-2'}>
                                    <p className={'text--color-dark-blue-800'}>
                                        Si confirmas y terminas la suscripción ahora, podrás acceder hasta el
                                        <strong> 29/08/2021 </strong>
                                        a tu beneficio.
                                    </p>
                                </div>

                                <div className={'d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between offset-top-3'}>
                                    <button className={'btn btn--spaced btn--md mt-3 mt-lg-0'} type={'button'} onClick={() => setModalTwo(false)}>Por ahora no</button>
                                    <button
                                        className={'btn btn--secondary btn--md'} type={'button'}
                                        onClick={handleDeletionStepNext}
                                    >
                                        Confirmar
                                    </button>
                                </div>
                            </>

                        }

                        {
                            deletionStep === 1 &&
                            <>
                                <BFFade>
                                    <div className={'d-flex flex-column align-items-center justify-content-center'}>
                                        <div className={'col-8 col-md-6 offset-top-3'}>
                                            <img className={'img--elastic'} src={imgAccidentInsurance} alt={`Ilustración de ${subscriptionName}`} />
                                        </div>
                                        <div className={'text--center offset-top-3'}>
                                            <p className={'text--title3'}>¡Recuerda que sigues protegido!</p>
                                            <p className={'text--title3'}>Tu seguro de vida está activo hasta el {subscriptionRenewalDate}.</p>
                                        </div>
                                        <div className={'col-md-6 offset-top-3 d-flex justify-content-center'}>
                                            <button
                                                type={'button'}
                                                className={'btn btn--outline btn--md full'}
                                                onClick={
                                                    ()=>{
                                                        handleDeletionStepNext()
                                                    }
                                                }
                                            >Entendido
                                            </button>
                                        </div>
                                    </div>
                                </BFFade>
                            </>
                        }

                    </div>
                </div>

            </BFModal>

        </>
    )
}

export default BoxSubscriptionDetail;
