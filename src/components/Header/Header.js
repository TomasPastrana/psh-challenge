
import React, { useState, useEffect, useContext } from 'react';

import { AppContext } from 'context/provider';

//Mixpanel
import { MixpanelContext } from 'context/MixpanelContext';

import BFDropDown from 'components/BFDropDown/BFDropDown';
import betterflyLogo from 'assets/img/betterfly-logo.svg';
import imgInsuranceCovid from 'assets/img/img-seguro-covid.png';

import { HashLink as Link } from 'react-router-hash-link';
import BFStepBox from 'components/BFStepBox/BFStepBox';
import BFScrollTo from 'components/BFScrollTo/BFScrollTo';

const Header = (props) => {

    const { 
        headerType = 'main',
        extOpenMobileMenu = false,
        addStepToStepBox = 0,
        scrollTo = '',
        pageName = '',
    } = props;

    /* eslint-disable */
    const { logout, userIsLogged, login, authSession, products, genericStrings, origin} = useContext(AppContext);
    /* eslint-disable */

    //If user has an image or not
    const [userHasImage, setUserHasImage] = useState(false);
    //Show only logout menu (only at the beginning of the project)
    const [userMenuOnlyLogout, setUserMenuOnlyLogout] = useState(true);
    //Show mobile menu on mobile screens
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    //Mobile overlay menu screen controls
    const [mobileMenuOverlayRemove, setMobileMenuOverlayRemove] = useState(true);

    //Mixpanel
	const Mixpanel = useContext(MixpanelContext); //eslint-disable-line

    useEffect(() => {
        setUserHasImage(true);

        if(extOpenMobileMenu){
            setMobileMenuOverlayRemove(false);
            setTimeout(function () {
                setMobileMenuOpen(true);
            }, 100);
        }
        //Show only logout when user is logged 
        setUserMenuOnlyLogout(false);

    }, [extOpenMobileMenu]);

    const openMobileMenu = () => {

        // Mixpanel.track('BetterPlace - Click - Menu');

        setMobileMenuOverlayRemove(false);

        if(extOpenMobileMenu){
            extOpenMobileMenu(false);
        }

        setTimeout(function () {
            setMobileMenuOpen(true);
        }, 100);
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);

        setTimeout(function () {
            setMobileMenuOverlayRemove(true);
        }, 300);

    }

    const getProductsList = () => {
        if (products) {
            return(
                products.map((product, key) => {
                    return(
                        <li key={key}>
                            <a href={`/product/${product.id}`}>
                                <div className={`d-flex align-items-center justify-content-start`}>
                                    <div className={'mr-2'}>
                                        <div className={'bf-circle bf-circle--color-white bf-circle--4'}>
                                            <img src={process.env.REACT_APP_DIRECTUS_ASSET_ENDPIONT + product.image.id} alt={'Illustration'} />
                                        </div>
                                    </div>
                                    <div>
                                        <span className={'text--title4 d-block'}>{product.translations[0].title}</span>
                                        <span className={'text--body4 d-block'}>{product.translations[0].product_official_name}</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    );
                })
            );
        }
    }

    if(headerType === 'main'){
        return (
            <>
                <header className={`bf-header ${mobileMenuOpen ? 'mobile-menu-is-opened' : ''} ${`${mobileMenuOverlayRemove ? 'mobile-menu-overlay-is-removed' : ''}`}`}>
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className={'d-flex align-items-center'}>
                            <button type="button" className="bf-hamburger" onClick={openMobileMenu}>
                                <i className={`icon ${mobileMenuOpen ? 'close' : ''}`}></i>
                            </button>
                            {
                                products && products.length > 0 ?
                                <Link to="/products" className={'bf-main-logo'}>
                                    <img src={betterflyLogo} alt={'Betterfly Logo'} />
                                </Link>
                                :
                                <Link to="/without-products" className={'bf-main-logo'}>
                                    <img src={betterflyLogo} alt={'Betterfly Logo'} />
                                </Link>
                            }
                        </div>
                        <nav>
                            <div className={`bf-to-mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                                <ul className={`d-flex align-items-center`}>
                                    <li className={'md--only bf-back-menu-area'}>
                                        <button type={'button'} className={'btn btn--back btn--back--main'} onClick={closeMobileMenu}>
                                            <i className={'icon--arrow-full'}></i>
                                        </button>
                                    </li>
                                    <li className={'md--only offset-bottom-2'}>
                                    {
                                        products && products.length > 0 ?
                                        <Link to={'/products'} className={'bf-main-logo'}>
                                            <img src={betterflyLogo} alt={'Betterfly logo'} />
                                        </Link>
                                         :
                                         <Link to="/without-products" className={'bf-main-logo'}>
                                             <img src={betterflyLogo} alt={'Betterfly Logo'} />
                                         </Link>
                                    }
                                    </li>
                                    {products && products.length > 0 &&
                                        <li className={'mobile-order-4'}>
                                            <BFDropDown
                                                name={'one'}
                                                textButton={'Productos'}
                                                classButton={'md--hide-arrow'}
                                                direction={'rtl'}
                                                mobileToModal={true}
                                                imageElement={
                                                    <span className={'bf-circle bf-circle--mobile-header md--only'}>
                                                        <i className={'icon icon--cube'}></i>
                                                    </span>
                                                }
                                            >
                                                <ul>
                                                    {getProductsList()}
                                                </ul>
                                            </BFDropDown>
                                        </li>
                                    }

                                    {
                                        products && products.length > 0 ? //Don't show faqs if the user doesn't have products
                                            pageName === 'plp' ?
                                            <li className={'mobile-order-2'}>
                                                <BFScrollTo 
                                                scrollTo={scrollTo}
                                                className={'bf-as-header-link'}
                                                clickFunction={closeMobileMenu}
                                                addNavigatorHash={'faqs'}
                                                >
                                                    <span className={'bf-circle bf-circle--mobile-header md--only'}>
                                                        <i className={'icon icon--question'}></i>
                                                    </span>
                                                    <strong>FAQ</strong>
                                                </BFScrollTo>
                                            </li>
                                            : 
                                            <li className={'mobile-order-2'}>
                                                <Link to="/home#faqs">
                                                    <span className={'bf-circle bf-circle--mobile-header md--only'}>
                                                        <i className={'icon icon--question'}></i>
                                                    </span>
                                                    <strong>FAQ</strong>
                                                </Link>
                                            </li>
                                        : 
                                        ''
                                    }

                                    <li className={'mobile-order-1 mobile-divider'}>
                                        <a href="https://gobetterfly.com/es/siniestros/" target={'_blank'} rel="noreferrer">
                                            <span className={'bf-circle bf-circle--mobile-header md--only'}>
                                                <i className={'icon icon--shield'}></i>
                                            </span>
                                            <strong>Declarar un siniestro</strong>
                                        </a>
                                    </li>
    
                                    <li className={'mobile-order-0'}>
    
                                        {
                                            userIsLogged ?
                                                <BFDropDown
                                                    name={'two'}
                                                    textButton={`¡Hola ${authSession.user_name}!`}
                                                    textButtonHideOnMobile={true}
                                                    direction={'rtl'}
                                                    imageElement={
                                                        <div className={'bf-circle bf-circle--4 mr-1'}>
                                                            {
                                                                userHasImage ?
                                                                    <img src={imgInsuranceCovid} alt={'User img'} />
                                                                    :
                                                                    <i className={'icon icon--user'}></i>
                                                            }
                                                        </div>
                                                    }
                                                    className={'mobile-visible'}
                                                >
                                                    <ul>
                                                        {
                                                            !userMenuOnlyLogout &&
                                                            <>
                                                                <li>
                                                                    <Link to={'/account/profile'}>
                                                                        <span className={'bf-circle bf-circle--mobile-header md--only'}>
                                                                            {
                                                                                userHasImage ?
                                                                                    <img src={imgInsuranceCovid} alt={'User img'} />
                                                                                :
                                                                                    <i className={'icon icon--user'}></i>
                                                                            }
                                                                        </span>
                                                                        <strong>Datos personales</strong>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to={'/account/subscriptions'}>
                                                                        <span className={'bf-circle bf-circle--mobile-header md--only'}>
                                                                            <i className={'icon icon--history'}></i>
                                                                        </span>
                                                                        <strong>Suscripciones</strong>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/account/payment-methods">
                                                                        <span className={'bf-circle bf-circle--mobile-header md--only'}>
                                                                            <i className={'icon icon--credit-card'}></i>
                                                                        </span>
                                                                        <strong>Medios de pago</strong>
                                                                    </Link>
                                                                </li>
                                                            </>
                                                        }
                                                        
                                                        {
                                                            origin !== 'app' ?
                                                            <li className={'md--not'}>
                                                                <Link to="#;" onClick={logout}>
                                                                    <span className={'bf-circle bf-circle--mobile-header md--only'}>
                                                                        <i className={'icon icon--credit-card'}></i>
                                                                    </span>
                                                                    <strong>Cerrar sesión</strong>
                                                                </Link>
                                                            </li>
                                                            : ''
                                                        }
                                                    </ul>
                                                </BFDropDown>
                                                :
                                                <Link to="#;" className={'d-flex align-items-center md--not'} onClick={login}>
                                                    <span className={'bf-circle bf-circle--4 mr-1'}>
                                                        <i className={'icon icon--user'}></i>
                                                    </span>
                                                    <span><strong>Iniciar sesión</strong></span>
                                                </Link>
    
                                        }
    
                                    </li>
                                    {
                                        userIsLogged && origin !== 'app' ?
                                            <li className={'md--only mobile-order-10 bf-logout-mobile'}>
                                                <Link to="#;" onClick={logout}>
                                                    <span className={'bf-circle bf-circle--mobile-header'}>
                                                        <i className={'icon icon--logout'}></i>
                                                    </span>
                                                    <strong>Cerrar sesión</strong>
                                                </Link>
                                            </li>
                                            :
                                            ''
                                    }
                                </ul>
                            </div>
                            {
                                userIsLogged ?
                                    <div className={'md--only mobile-order-10 bf-logout-mobile'}>
                                        <Link to="#;" className={'d-flex align-items-center'}>
                                            <span className={'bf-circle bf-circle--mobile-header mr-1'}>
                                                {
                                                    userHasImage ?
                                                        <img src={imgInsuranceCovid} alt={'User img'} />
                                                        :
                                                        <i className={'icon icon--user'}></i>
                                                }
                                            </span>
                                            <span className={'text--body2'}>{`${authSession.user_name}`}</span>
                                        </Link>
                                    </div>
                                    :
                                    ''
                            }
                        </nav>
                    </div>
                    <button type={'button'} className={'bf-header__close-overlay'} onClick={closeMobileMenu}></button>
                </header>
            </>
        )
    }
    if(headerType === 'funnel'){
        return (
            <header className={`bf-header`}>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className={'d-flex align-items-center'}>
                        <Link to="/products" className={'bf-main-logo'}>
                            <img src={betterflyLogo} alt={'Betterfly Logo'} />
                        </Link>
                    </div>  
                    <div>
                        <BFStepBox stepTotal={3} stepCurrent={addStepToStepBox}/>
                    </div>
                </div>
            </header>
        )
    }
    if(headerType === 'alert'){
        return (
            <header className={`bf-header ${headerType === 'alert' ? 'bf-header--type-alert' : ''}`}>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className={'d-flex align-items-center'}>
                        <Link to="/products" className={'bf-main-logo'}>
                            <img src={betterflyLogo} alt={'Betterfly Logo'} />
                        </Link>
                    </div>  
                </div>
            </header>
        )
    }
    

    if(headerType === 'without-products'){
        return (
            <header className={`bf-header ${mobileMenuOpen ? 'mobile-menu-is-opened' : ''} ${`${mobileMenuOverlayRemove ? 'mobile-menu-overlay-is-removed' : ''}`}`}>
            <div className="container d-flex justify-content-between align-items-center">
                <div className={'d-flex align-items-center'}>
                    <button type="button" className="bf-hamburger" onClick={openMobileMenu}>
                        <i className={`icon ${mobileMenuOpen ? 'close' : ''}`}></i>
                    </button>
                    <Link to="/without-products" className={'bf-main-logo'} onClick={ e => e.preventDefault() }>
                        <img src={betterflyLogo} alt={'Betterfly Logo'} />
                    </Link>
                </div>
                <nav>
                    <div className={`bf-to-mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                        <ul className={`d-flex align-items-center`}>
                            <li className={'md--only bf-back-menu-area'}>
                                <button type={'button'} className={'btn btn--back btn--back--main'} onClick={closeMobileMenu}>
                                    <i className={'icon--arrow-full'}></i>
                                </button>
                            </li>
                            <li className={'md--only offset-bottom-2'}>
                                <Link to={'/without-products'} className={'bf-main-logo'}>
                                    <img src={betterflyLogo} alt={'Betterfly logo'} />
                                </Link>
                            </li>

                            <li className={'mobile-order-1 mobile-divider'}>
                                <a href="https://gobetterfly.com/es/siniestros/" target={'_blank'} rel="noreferrer">
                                    <span className={'bf-circle bf-circle--mobile-header md--only'}>
                                        <i className={'icon icon--shield'}></i>
                                    </span>
                                    <strong>Declarar un siniestro</strong>
                                </a>
                            </li>

                            <li className={'mobile-order-0'}>

                                {
                                    userIsLogged ?
                                        <BFDropDown
                                            name={'two'}
                                            textButton={`¡Hola ${authSession.user_name}!`}
                                            textButtonHideOnMobile={true}
                                            direction={'rtl'}
                                            imageElement={
                                                <div className={'bf-circle bf-circle--4 mr-1'}>
                                                    {
                                                        userHasImage ?
                                                            <img src={imgInsuranceCovid} alt={'User img'} />
                                                            :
                                                            <i className={'icon icon--user'}></i>
                                                    }
                                                </div>
                                            }
                                            className={'mobile-visible'}
                                        >
                                        { 
                                            origin !== 'app' ?
                                            <ul>
                                                <li>
                                                    <Link to={'/account/profile'}>
                                                        <span className={'bf-circle bf-circle--mobile-header md--only'}>
                                                            {
                                                                userHasImage ?
                                                                    <img src={imgInsuranceCovid} alt={'User img'} />
                                                                :
                                                                    <i className={'icon icon--user'}></i>
                                                            }
                                                        </span>
                                                        <strong>Datos personales</strong>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/account/subscriptions'}>
                                                        <span className={'bf-circle bf-circle--mobile-header md--only'}>
                                                            <i className={'icon icon--history'}></i>
                                                        </span>
                                                        <strong>Suscripciones</strong>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/account/payment-methods">
                                                        <span className={'bf-circle bf-circle--mobile-header md--only'}>
                                                            <i className={'icon icon--credit-card'}></i>
                                                        </span>
                                                        <strong>Medios de pago</strong>
                                                    </Link>
                                                </li>
                                                <li className={'md--not'}>
                                                    <Link to="#;" onClick={logout}>
                                                        <span className={'bf-circle bf-circle--mobile-header md--only'}>
                                                            <i className={'icon icon--credit-card'}></i>
                                                        </span>
                                                        <strong>Cerrar sesión</strong>
                                                    </Link>
                                                </li>

                                            </ul>
                                                : ''
                                        }
                                        </BFDropDown>
                                        :
                                        <Link to="#;" className={'d-flex align-items-center md--not'} onClick={login}>
                                            <span className={'bf-circle bf-circle--4 mr-1'}>
                                                <i className={'icon icon--user'}></i>
                                            </span>
                                            <span><strong>Iniciar sesión</strong></span>
                                        </Link>

                                }

                            </li>
                            {
                                userIsLogged && origin !== 'app' ?
                                    <li className={'md--only mobile-order-10 bf-logout-mobile'}>
                                        <Link to="#;" onClick={logout}>
                                            <span className={'bf-circle bf-circle--mobile-header'}>
                                                <i className={'icon icon--logout'}></i>
                                            </span>
                                            <strong>Cerrar sesión</strong>
                                        </Link>
                                    </li>
                                    :
                                    ''
                            }
                        </ul>
                    </div>
                    {
                        userIsLogged ?
                            <div className={'md--only mobile-order-10 bf-logout-mobile'}>
                                <Link to="#;" className={'d-flex align-items-center'}>
                                    <span className={'bf-circle bf-circle--mobile-header mr-1'}>
                                        {
                                            userHasImage ?
                                                <img src={imgInsuranceCovid} alt={'User img'} />
                                                :
                                                <i className={'icon icon--user'}></i>
                                        }
                                    </span>
                                    <span className={'text--body2'}>{`${authSession.user_name}`}</span>
                                </Link>
                            </div>
                            :
                            ''
                    }
                </nav>
            </div>
            <button type={'button'} className={'bf-header__close-overlay'} onClick={closeMobileMenu}></button>
        </header>
        )
    }
}

export default Header;
