
import React, {useState} from 'react';
import BFAccordion from 'components/BFAccordion/BFAccordion';

const PaymentHistoryAccordion = (props) => {

    const {
        className = '',
        suscriptionMonth = '',
        suscriptionTotal = '',
        suscriptionStatus = '',
        suscriptionStartDate = '',
        suscriptionPaymentDate = '',
        suscriptionRenewalDate = '',
        suscriptionEmail = ''
    } = props;

    const [accSelectedItem, setAccSelectedItem] = useState('');

    const handleAccSelectedItem = (selectedItem, isActive)=>{
		if(!isActive){
			setAccSelectedItem(selectedItem);
		}else{
			setAccSelectedItem(false);
		}
	}

    return (
        <>
            <BFAccordion
                className={`bf-accordion-button--type-2 ${className}`}
                customTitle={
                    <div className={'d-flex align-items-sm-center flex-column flex-sm-row justify-content-between flex-grow-1'}>
                        <div>
                            <span className={'d-block text--title4 text--color-dark-blue-800'}><strong>{suscriptionMonth}</strong></span>
                        </div>
                        <div className={'d-flex align-items-center mr-3'}>
                            <div className={'mr-3'}>
                                <span className={'text--body1 text--color-dark-blue-600'}>Total: {suscriptionTotal}</span>
                            </div>
                            <div>
                                {
                                    suscriptionStatus === 'paid' &&
                                    <span className={'text--tag text--tag--type-success'}>PAGADO</span>
                                }
                                {
                                    suscriptionStatus === 'rejected' &&
                                    <span className={'text--tag text--tag--type-rejected'}>RECHAZADO</span>
                                }
                                {
                                    suscriptionStatus === 'pending' &&
                                    <span className={'text--tag text--tag--type-pending'}>PENDIENTE</span>
                                }
                                
                            </div>
                        </div>
                    </div>
                }
                itemKey={1} 
                activeItem={parseInt(accSelectedItem) === 1 ? true : false}
                selectedItem={handleAccSelectedItem}
            >
                <div>
                    <span><strong>Detalle</strong></span>
                </div>
                <div className={'d-flex mt-3 bf-as-table'}>
                    <div>
                        <span className={'text--body1 d-block text--color-dark-blue-600'}>Inicio de la suscripción</span>
                        <span className={'text--body1 text--color-dark-blue-800'}><strong>{suscriptionStartDate}</strong></span>
                    </div>
                    <div>
                        <span className={'text--body1 d-block text--color-dark-blue-600'}>Día de cobro</span>
                        <span className={'text--body1 text--color-dark-blue-800'}><strong>{suscriptionPaymentDate}</strong></span>
                    </div>
                </div>
                <div className={'d-flex bf-as-table'}>
                    {
                        suscriptionRenewalDate &&
                        <div>
                            <span className={'text--body1 d-block text--color-dark-blue-600'}>Fecha de renovación</span>
                            <span className={'text--body1 text--color-dark-blue-800'}><strong>{suscriptionRenewalDate}</strong></span>
                        </div>
                    }
                    <div>
                        <span className={'text--body1 d-block text--color-dark-blue-600'}>Email</span>
                        <span className={'text--body1 text--color-dark-blue-800'}><strong>{suscriptionEmail}</strong></span>
                    </div>
                </div>
            </BFAccordion>
        </>
    )
}

export default PaymentHistoryAccordion
