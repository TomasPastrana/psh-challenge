
import React from 'react';

import cardLogoVisa from 'assets/img/card-logos/logo-visa.svg';
import cardLogoMastercard from 'assets/img/card-logos/logo-mastercard.svg';

const BFCreditCardSketch = (props) => {

    const {
        className = '',
        putCardName = '',
        putCardNumber = '',
        cardCVV = '',
        putCardNumberCVVFocus = false,
        cardDate = '',
        cardBrand = '',
        cardSave = false
    } = props;

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
            <div className={`bf-credit-card-sketch ${putCardNumberCVVFocus ? 'rotate' : ''} ${className}`}>

                <div className={'bf-credit-card-sketch__flip-cont'}>

                    <div className={'bf-credit-card-sketch__front'}>
                        <div className={'bf-credit-card-sketch__front__content'}>
                            <div>
                                <div className={'bf-card-logo-area'}>
                                    {
                                        cardBrand === 'default' || !cardBrand ? 
                                            <i className={'icon icon--credit-card'}></i>
                                        :
                                            handleShowCardBrandType(cardBrand)
                                    }
                                 </div>
                            </div>
                            <div className={'mt-1 mt-md-1'}>
                                {
                                    !cardSave ?
                                        <span className={'bf-card-number'}>
                                            <span><span className={'bf-card-number--hidden'}>{putCardNumber ? putCardNumber.slice(0, 4).replace(/\d/g, c => '..........'[c]) : '....'}</span></span>
                                            <span><span className={'bf-card-number--hidden'}>{putCardNumber ? putCardNumber.slice(4, 8).replace(/\d/g, c => '..........'[c]) : '....'}</span></span>
                                            <span><span className={'bf-card-number--hidden'}>{putCardNumber ? putCardNumber.slice(8, 12).replace(/\d/g, c => '..........'[c]) : '....'}</span></span>
                                            <span className={`bf-card-number--show ${!putCardNumber ? 'bf-card-number--hidden' : ''}`}>{putCardNumber ? putCardNumber.slice(12) : '....'}</span>
                                        </span>
                                    :
                                        <span className={'bf-card-number'}>
                                            <span><span className={'bf-card-number--hidden'}>....</span></span>
                                            <span><span className={'bf-card-number--hidden'}>....</span></span>
                                            <span><span className={'bf-card-number--hidden'}>....</span></span>
                                            <span className={`bf-card-number--show ${!putCardNumber ? 'bf-card-number--hidden' : ''}`}>{putCardNumber ? putCardNumber : '....'}</span>
                                        </span>
                                }
                            </div>
                            {
                                !cardSave ?
                                    <div className={'d-flex justify-content-between align-items-start mt-3 mt-md-4'}>
                                        <div className={'bf-card-name'}>
                                            <span className={'bf-card-title'}>Titular:</span>
                                            <span>{`${putCardName ? putCardName : 'Tu nombre'}`}</span>
                                        </div>
                                        <div className={`bf-card-date`}>
                                            <span className={'bf-card-title'}>Expira:</span>
                                            <span><span>{cardDate ? cardDate.slice(0, 2) : '**'}</span>{`${cardDate.length > 1 ? '/' : ''}`}<span>{cardDate ? cardDate.slice(2, 4) : '**'}</span></span>
                                        </div>
                                    </div>
                                : ''
                            }
                        </div>
                    </div>

                    <div className={'bf-credit-card-sketch__back'}>
                        <div className="bf-credit-card-sketch__strip"></div>
                        <div className="bf-credit-card-sketch__back__content">
                            <div>
                                <span className={'bf-credit-card-sketch__cvv'}> <span className={'bf-card-number--hidden'}>{cardCVV ? cardCVV.replace(/\d/g, c => '.........'[c]) : ''}</span></span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default BFCreditCardSketch;
