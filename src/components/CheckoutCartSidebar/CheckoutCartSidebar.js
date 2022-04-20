import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from 'context/provider';
import { Link } from 'react-router-dom';
import BFFade from 'components/BFFade/BFFade';
import BFModal from 'components/BFModal/BFModal';
import kushkiLogoBlack from 'assets/img/logo--kushki-black.svg';

const CheckoutCartSidebar = (props) => {
    const {
        className = '',
        productImg = '',
        productImgAlt = '',
        productTitle = '',
        productPrice = '',
        paymentDateText = '',
        productHighlight = '',
        productDetail = '',
        openModal = false,
        closeModal = '',
        submitArea = '',
        productTaxDetail = '',
        productPriceValue = ''
    } = props;

    const { genericStrings } = useContext(AppContext);

    //Modal behaviours
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        openModal && setModalShow(true)
    }, [openModal])

    return (
        <>

            <div className={`bf-box bf-box--type-4 ${className}`}>
                <h2 className={'text--title2'}><strong>{'Suscripción seleccionada'}</strong></h2>
                <button type="button" className={'text--body3 text--link text--link-underline mt-3'} onClick={() => setModalShow(true)}>Cambiar producto</button>
                <div className={'d-flex align-items-center offset-top-4'}>
                    <div>
                        { productImg?
                        <img
                            className={'img--elastic bpl--img-product-selected--md'}
                            src={productImg}
                            alt={productImgAlt}
                        />:''
                      }
                    </div>
                    <div>
                        <h4 className={'text--title3'}><strong>{productTitle}</strong></h4>
                        
                        {
                            productTaxDetail ?
                            <div className={'mt-2'}>
                                <p className={'text--body4 text--color-dark-blue-800'}><strong>{productTaxDetail}</strong></p>
                            </div> :
                            productPrice &&
                            <span className={'text--title4'}>{productPrice}</span>
                        }
                    </div>
                </div>

                
                {
                    !productTaxDetail &&
                    <div className={'text--color-highlight-violete offset-bottom-1 offset-top-2'}>
                        <i className={'icon icon--shield text--title2 offset-right-1'}></i>
                        <strong className={'text--body2'}>{productHighlight}</strong>
                    </div>
                }
                
                <div>
                    {
                        !productTaxDetail &&
                        <p className={'text--body4 text--color-dark-blue-800 offset-top-1'}>
                            {
                                productDetail
                            }
                        </p>
                    }
                    <div className={'text--highlight text--highlight--warning d-flex mt-3'}>
                        <div className={'d-flex align-items-center justify-content-between flex-grow-1'}>
                            <div className={'d-flex align-items-center'}>
                                <i className={'icon--money text--title1 mr-1'}></i>
                                <span className={'text--title4'}>{paymentDateText}</span>
                            </div>
                            <div>
                                <span><strong>{productPriceValue}</strong></span>
                            </div>
                        </div>
                    </div>

                    <BFFade>
                        {
                            submitArea
                        }
                    </BFFade>

                    <div className={'d-flex align-items-center justify-content-center mt-4'}>
                        <div className={'pr-2 mr-2 bf-border-right bf-border-right--dark-blue-600'}>
                            <img src={kushkiLogoBlack} alt={'Kushki logo'} />
                        </div>
                        <div>
                            <span className={'text--body4 text--color-dark-blue-600'}>Pago realizado a través de Kushki</span>
                        </div>
                    </div>
                </div>

            </div>


            <BFModal
                show={modalShow}
                onHide={
                    () => {
                        setModalShow(false)
                        closeModal && closeModal(false);
                    }
                }
                className={'bf-modal--md'}
                closeOuter={true}
            >
                <div className={'d-flex justify-content-center'}>
                    <div className={'col-md-10'}>
                        <h4 className={'text--title2 text--center offset-bottom-3'}><strong>{genericStrings.txt_swap_product}</strong></h4>
                        <p className={'text--title3 text--color-dark-blue-800 text--center'}>
                            {genericStrings.txt_swap_product_decription}
                        </p>
                        <div className={'d-flex align-items-center justify-content-center offset-top-4'}>
                            <div>
                                <img
                                    className={'img--elastic bpl--img-product-selected--md'}
                                    src={productImg}
                                    alt={productImgAlt}
                                />
                            </div>
                            <div>
                                <h4 className={'text--title3'}><strong>{productTitle}</strong></h4>
                                <span className={'text--title4'}>{productPrice}</span>
                            </div>
                        </div>
                        <div className={'row justify-content-center flex-column-reverse flex-md-row offset-top-3'}>
                            <div className={'col-md-6'}>
                                <button type={'button'} 
                                    className={'btn btn--outline full'} 
                                    onClick={ () => {
                                        setModalShow(false)
                                        closeModal && closeModal(false);
                                    }}
                                >
                                    Volver
                                </button>
                            </div>
                            <div className={'col-md-6 mb-4 mb-md-0'}>
                                <Link to={'/products'} className={'btn btn--secondary full'}>Confirmar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </BFModal>

        </>
    )
}

export default CheckoutCartSidebar;
