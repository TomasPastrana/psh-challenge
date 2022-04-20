

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from 'context/provider';
import betterflyLogoWhite from 'assets/img/betterfly-logo-white.svg';
import kushkiLogo from 'assets/img/kushki-logo.svg';
// import iconImgCardSketch from 'assets/img/icon--img-sketch.svg';

const Footer = (props) => {
    const {
        footerType = 'main',
    } = props;

    const { genericStrings } = useContext(AppContext);

    // function getKushkiSecurityLogo() {
    //     if (pages) {
    //         var footer = pages.find(e => e.name === 'Footer');
    //         return process.env.REACT_APP_DIRECTUS_ASSET_ENDPIONT + footer.kushki_security_logo.id;
    //     }
    // }

    if (footerType === 'main') {
        return (
            <footer className={'bf-footer'}>
                <div className={'bf-footer--cont'}>
                    <div className={'container'}>
                        <div className={'row justify-content-center'}>
                            <div className={'col-md-12'}>
                                <div className={'row'}>
                                    <div className={'col-md-4'}>
                                        <Link to={'/products'} title={'Ir a página de inicio de Betterplace'}>
                                            <img src={betterflyLogoWhite} alt={'Betterfly logo'} />
                                        </Link>
                                        <ul className={'bf-social-group offset-top-4'}>
                                            <li>
                                                <a href={'https://www.facebook.com/gobetterfly'} title={'Enlace a Facebook oficial de Betterfly'} target={'_blank'} rel="noreferrer">
                                                    <i className={'icon--facebook-filled'}></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={'https://www.instagram.com/gobetterfly/'} title={'Enlace a Instagram oficial de Betterfly'} target={'_blank'} rel="noreferrer">
                                                    <i className={'icon--instagram'}></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={'https://www.linkedin.com/company/11567849'} title={'Enlace a Linkedin oficial de Betterfly'} target={'_blank'} rel="noreferrer">
                                                    <i className={'icon--linkedin-filled'}></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={'https://twitter.com/gobetterfly'} title={'Enlace a Twitter oficial de Betterfly'} target={'_blank'} rel="noreferrer">
                                                    <i className={'icon--twitter-filled'}></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={'https://www.youtube.com/c/betterfly'} title={'Enlace a Youtube oficial de Betterfly'} target={'_blank'} rel="noreferrer">
                                                    <i className={'icon--youtube-filled'}></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={'col-md-6'}>
                                        <div className={'row'}>
                                            <div className={'col-md-6 offset-top-4 sm-offset-top-0'}>
                                                <h6 className={'text--body1'}>
                                                    <strong>Betterfly</strong>
                                                </h6>
                                                <ul className={'mt-3'}>
                                                    <li>
                                                        <a href="https://gobetterfly.com/es/terminos-condiciones/" target={'_blank'} rel="noreferrer">Términos y condiciones</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://gobetterfly.com/es/politicas-de-privacidad/" target={'_blank'} rel="noreferrer">Seguridad y privacidad</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={'col-md-6 offset-top-4 sm-offset-top-0'}>
                                                <h6 className={'text--body1'}><strong>Centro de ayuda</strong></h6>
                                                <ul className={'mt-3'}>
                                                    <li>
                                                        <a href="https://gobetterfly.com/es/faq/" target={'_blank'} rel="noreferrer">Contáctanos</a> {/*Whatsapp*/}
                                                    </li>
                                                    {genericStrings.whatsapp_number && 
                                                        <li>
                                                            <a href={`https://wa.me/${genericStrings.whatsapp_number.replaceAll(" ", "")}`} target={'_blank'} rel="noreferrer">Soporte</a>
                                                        </li>
                                                    }
                                                    <li>
                                                        <a href="https://gobetterfly.com/es/siniestros/" target={'_blank'} rel="noreferrer">Declarar un siniestro</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://gobetterfly.com/wp-content/uploads/2021/08/Instructivo-Seguro-Covid-19-BTF-20082021.pdf" target={'_blank'} rel="noreferrer">Instructivo seguro Covid</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col-md-2 offset-top-4 sm-offset-top-0'}>
                                        <h6 className={'text--body1'}><strong>Medios de pago</strong></h6>
                                        <ul className={'mt-3'}>
                                            <li>
                                                <a href={'https://www.kushki.com/'} title={'Enlace a sitio oficial de Kushki'} target={'_blank'} rel="noreferrer">
                                                    <img src={kushkiLogo} alt={'Lushki logo'} />
                                                </a>
                                            </li>
                                        </ul>

                                        {/* <ul className="bf-logo-group offset-top-2">
                                            <li>
                                                <Link to="#;">
                                                    <img src={getKushkiSecurityLogo()} alt={'Icono de imagen'} />
                                                </Link>
                                            </li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'bf-footer__bottom-bar'}>
                    <div className={'container text--center'}>
                        <span className={'text--body4 text--color-dark-blue-400'}>© {new Date().getFullYear()} Betterfly. Todos los derechos reservados.</span>
                    </div>
                </div>
            </footer>
        )
    }

    if (footerType === 'funnel') {
        return (
            <footer className={'bf-footer'}>
                <div className={'bf-footer--cont'}>
                    <div className={'container'}>
                        <div className={'row justify-content-between'}>
                            <div className={'col-md-4'}>
                                <img src={betterflyLogoWhite} alt={'Betterfly logo'} />
                            </div>
                            <div className={'col-md-4 offset-top-4 sm-offset-top-0'}>
                                <div className={'row align-items-center justify-content-between'}>
                                    <div className={'col-lg-6'}>
                                        <h6 className={'text--body1'}><strong>Medios de pago</strong></h6>
                                        <ul className={'mt-3'}>
                                            <li>
                                                <img src={kushkiLogo} alt={'Lushki logo'} />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'bf-footer__bottom-bar'}>
                    <div className={'container text--center'}>
                        <span className={'text--body4 text--color-dark-blue-400'}>© {new Date().getFullYear()} Betterfly. Todos los derechos reservados.</span>
                    </div>
                </div>
            </footer>
        )
    }

}

export default Footer;
