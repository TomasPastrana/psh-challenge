

import React from 'react';

import LoaderStarIMG from './img/bf-loader-star.svg';
import LoaderShadowIMG from './img/loader-credit-card-shadow.png';

const BFLoaderLoginTransition = (props) => {
    const {
        className = '',
        children = '',
        loaderText = 'Loading',
        fullPage = false,
    } = props;
    return (
        <div className={`bf-loader-image--wrap ${className} ${fullPage ? 'bf-loader-image--wrap--full-page' : ''}`}>
            <div>
                <div className={`bf-loader-image--cont`}>
                    {
                        children
                    }
                    <div className={'bf-loader-image bf-loader-image--star bf-loader-image--star--small'}>
                        <img src={LoaderStarIMG} alt={'Star illustration'} />
                    </div>
                    <div className={'bf-loader-image bf-loader-image--star bf-loader-image--star--big'}>
                        <img src={LoaderStarIMG} alt={'Star illustration'} />
                    </div>
                    <div className={'bf-loader-image bf-loader-image--shadow'}>
                        <img src={LoaderShadowIMG} alt={'Shadow illustration'} />
                    </div>
                </div>
                <h5 className={'text--light text--secondary'}>
                    {loaderText}
                <span className={'bf-loader-image--animated-dots'}><span>.</span><span>.</span><span>.</span></span></h5>
            </div>
        </div>
    )
}

export default BFLoaderLoginTransition;
