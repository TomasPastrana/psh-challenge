
import React, { useState, useRef, useEffect, useCallback } from 'react';

const BFTooltip = (props) => {
    const {
        className,
        buttonContent,
        children,
        position = 'center',
        width,
    } = props;

    const [activeClass, setActiveClass] = useState(false);
    const [hideClass, setHideClass] = useState();

    const tooltipRef = useRef();
    let fadeOutTooltip;

    const handleSetActiveClass = () => {
        setActiveClass(!activeClass);
    }

    const handleClickOutside = useCallback((e) => {
        if (!tooltipRef.current.contains(e.target)) {
            handleFadeOut();
        }
    },[]); //eslint-disable-line

    const handleFadeOut = ()=>{
        setHideClass(true);
        fadeOutTooltip = setTimeout(()=>{
            setActiveClass(false);
            setHideClass(false);
            clearTimeout(fadeOutTooltip);
        },300)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () =>{
            document.removeEventListener('mousedown', handleClickOutside);
            clearTimeout(fadeOutTooltip); //eslint-disable-line
        }
    },[handleClickOutside]);//eslint-disable-line

    return (
        <>
            <button
                ref={tooltipRef}
                type={'button'}
                className={`bf-tooltip ${className ? className : ''} ${position ? 'bf-tooltip--position-' + position + '' : ''} ${activeClass ? 'active' : ''} ${hideClass ? 'hide' : ''}`}
                onClick={handleSetActiveClass}
            >
                {
                    buttonContent ?
                        buttonContent :
                        ''
                }
                {
                    <div style={ width ? {maxWidth : width + 'px'} : {border: 'none'}} className={`bf-tooltip__deploy-area`}>
                        <div className={'bf-tooltip__content'}>
                            {children}
                        </div>
                    </div>
                }
            </button>
        </>
    )
}

export default BFTooltip;
