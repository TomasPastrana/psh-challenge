
import React, { useState, useEffect, useContext } from 'react';

import { AppContext } from 'context/provider';

import BFDropDown from 'components/BFDropDown/BFDropDown';
import pshLogo from 'assets/img/logo_red_psh.svg';

import { HashLink as Link } from 'react-router-hash-link';
import BFStepBox from 'components/BFStepBox/BFStepBox';
import BFScrollTo from 'components/BFScrollTo/BFScrollTo';

const Header = (props) => {

	const {
		headerType = 'main',
		extOpenMobileMenu = false,
	} = props;

	const { products } = useContext(AppContext);

	//Show mobile menu on mobile screens
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	//Mobile overlay menu screen controls
	const [mobileMenuOverlayRemove, setMobileMenuOverlayRemove] = useState(true);


	useEffect(() => {
		if (extOpenMobileMenu) {
			setMobileMenuOverlayRemove(false);
			setTimeout(function () {
				setMobileMenuOpen(true);
			}, 100);
		}
	}, [extOpenMobileMenu]);

	const openMobileMenu = () => {
		setMobileMenuOverlayRemove(false);

		if (extOpenMobileMenu) {
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

	return (
		<>
			{/* <header className={`psh-header ${mobileMenuOpen ? 'mobile-menu-is-opened' : ''} ${`${mobileMenuOverlayRemove ? 'mobile-menu-overlay-is-removed' : ''}`}`}> */}
			<header className={`psh-header ${mobileMenuOpen && 'mobile-menu-is-opened'} ${mobileMenuOverlayRemove && 'mobile-menu-overlay-is-removed'}`}>
				<div className="container d-flex justify-content-between align-items-center">
					<div className={'d-flex align-items-center'}>
						<button type="button" className="psh-hamburger" onClick={openMobileMenu}>
							<i className={`icon ${mobileMenuOpen ? 'close' : ''}`}></i>
						</button>
						<Link to="/home" className={'psh-main-logo'}>
							<img src={pshLogo} alt={'psh company logo'} />
						</Link>
					</div>
					<nav>
						<div className={`psh-to-mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
							<ul className={`d-flex align-items-center`}>
								<li className={'md--only psh-back-menu-area'}>
									<button type={'button'} className={'btn btn--back btn--back--main'} onClick={closeMobileMenu}>
										<i className={'icon--arrow-full'} />
										{/* <strong>X Close</strong> */}
									</button>
								</li>

								<li className={'mobile-order-1 mobile-divider'}>
									<a href="https://gobetterfly.com/es/siniestros/" target={'_blank'} rel="noreferrer">
										<span className={'psh-circle psh-circle--mobile-header md--only'}>
											<i className={'icon icon--shield'}></i>
										</span>
										<strong>Series</strong>
									</a>
								</li>

								<li className={'mobile-order-1 mobile-divider'}>
									<a href="https://gobetterfly.com/es/siniestros/" target={'_blank'} rel="noreferrer">
										<span className={'psh-circle psh-circle--mobile-header md--only'}>
											<i className={'icon icon--shield'}></i>
										</span>
										<strong>Quotes</strong>
									</a>
								</li>
								{/* <li className={'mobile-order-0'}>

								</li> */}
							</ul>
						</div>
					</nav>
				</div>
				<button type={'button'} className={'psh-header__close-overlay'} onClick={closeMobileMenu}></button>
			</header>
		</>
	)
}

export default Header;
