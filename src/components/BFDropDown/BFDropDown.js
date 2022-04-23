import React, {useEffect, useRef, useState } from 'react';
//import onClickOutside from "react-onclickoutside";

var BFDropDown = (props) => {
    const {
        textButton,
        textButtonHideOnMobile,
        imageElement,
        direction,
        mobileToModal,
        className,
        classButton,
        children,
        name
    } = props;
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    }

    //const [clickedOutside, setClickedOutside] = useState(false);
    const myRef = useRef();

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            //setClickedOutside(true);
            setIsActive(false);
        }
    };

   // const handleClickInside = () => setClickedOutside(false);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

   BFDropDown['handleClickOutside_' + name] = () => setIsActive(false);

    return (
        <div ref={myRef}>
            <div className={`relative-element`}>
                <button type={'button'} onClick={handleClick} className={`btn btn--text-link btn--dropdown ${classButton ? classButton : ''} ${isActive ? 'active' : 'false'} ${textButtonHideOnMobile === true ? 'md--not' : ''}`}>
                    {
                        imageElement ?
                            imageElement
                            :
                            ''
                    }
                    <span>{textButton ? textButton : 'Preview Text'}</span>
                    <i className={'icon icon--arrow-small'}></i>
                </button>
                <div
                    className={`bf-dropdown-target ${direction ? direction : ''} ${isActive ? 'active' : ''} ${mobileToModal === true ? 'bf-dropdown-target--mobile-modal' : ''} ${className ? className : ''}`}
                >
                    <div className={`bf-dropdown-target--core`}>
                        {
                            mobileToModal === true ?
                                <div className={'bf-dropdown-target--head'}>
                                    <div>
                                        <button type={'button'} className={'btn btn--back'} onClick={handleClick}>
                                            <i className={'icon--arrow-full'}></i>
                                        </button>
                                    </div>
                                    <span className={'text--body1'}><strong>{textButton}</strong></span>
                                </div>
                                : ''
                        }
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
/*
const clickOutsideConfig = {
    handleClickOutside: ({props}) => BFDropDown['handleClickOutside_' + props.name]
};
*/
//export default onClickOutside(BFDropDown);

export default BFDropDown;
