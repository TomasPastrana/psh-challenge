

import React from 'react';

import LoaderCreditCardIMG from './img/bf-loader-credit-card.svg';
import LoaderStarIMG from './img/bf-loader-star.svg';
import LoaderShadowIMG from './img/loader-credit-card-shadow.png';

const BFLoaderCardTransition = () => {
    return (
        <div className={'bf-loader-img--cont'}>
            <div className={'bf-loader-img bf-loader-img--credit-card'}>
                <img src={LoaderCreditCardIMG} alt={'Credit card illustration'} />
            </div>
            <div className={'bf-loader-img bf-loader-img--star bf-loader-img--star--small'}>
                <img src={LoaderStarIMG} alt={'Star illustration'} />
            </div>
            <div className={'bf-loader-img bf-loader-img--star bf-loader-img--star--big'}>
                <img src={LoaderStarIMG} alt={'Star illustration'} />
            </div>
            <div className={'bf-loader-img bf-loader-img--shadow'}>
                <img src={LoaderShadowIMG} alt={'Shadow illustration'} />
            </div>
        </div>
    )
}

export default BFLoaderCardTransition
