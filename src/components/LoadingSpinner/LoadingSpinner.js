import React from 'react';
import './LoadingSpinner.scss';

export default function LoadingSpinner(props) {
    const {
        loadingText = 'Cargando...',
        className = ''
    } = props;
    return(
        <div className={`bf-loading-area ${className}`}>
            <div className={'bf-loading-elements'}>
                <div className={'bf-loading-box offset-bottom-1'}>
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
                <div>
                    <i className="fa fa-spinner fa-spin" />
                    <span className={'text--title4 text--color-light-blue-1000'}>{loadingText}</span>
                </div>
            </div>
        </div>
    )
}