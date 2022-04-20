import React, { useState, useRef, useEffect } from 'react';

function BFAccordion(props) {
    const {
        variant,
        className,
        children,
        accTitle = '',
        accIcon,
        customTitle,
        activeItem = false,
        itemKey,
        selectedItem
    } = props;
    const [childrenHeight, setChildrenHeight] = useState();
    const [cssOpacity, setCssOpacity] = useState();
    const [onStransition, setOnStransition] = useState();
    const stageCanvasRef = useRef(null);

    const handleSetActiveClass = (e) => {
        selectedItem(e.currentTarget.getAttribute('data-element-key'), activeItem, accTitle);
    }

    useEffect(() => {
        if (stageCanvasRef.current) {
            if (activeItem) {
                let height = stageCanvasRef.current.offsetHeight;
                setChildrenHeight(height + 'px');
                setCssOpacity(1);
                setOnStransition(true);
                let timeOne = setTimeout(function () {
                    setChildrenHeight('auto');
                    setOnStransition(false);
                    clearTimeout(timeOne);
                }, 500);
            } else {
                let height = stageCanvasRef.current.offsetHeight;
                setChildrenHeight(height + 'px');
                setCssOpacity(1);
                setOnStransition(true);
                let timeTwo = setTimeout(function () {
                    setChildrenHeight(0);
                    setCssOpacity(0);
                    setOnStransition(false);
                    clearTimeout(timeTwo);
                }, 100);
            }
        }
    }, [activeItem])

    return (
        <>
            <button 
                key={0} 
                className={`bf-accordion-button ${onStransition ? 'bf-accordion-button--on-transition' : ''} ${variant ? `bf-accordion-button--${variant}` : ''} ${className ? className : ''} ${ activeItem ? 'active' : ''}`} 
                onClick={handleSetActiveClass} 
                data-element-key={itemKey}
            >
                
                {
                    customTitle ? customTitle 
                    : <span className={`text--title3`}>{accTitle ? accTitle : 'Accordion example text'}</span>
                    
                }

                {
                    accIcon ? <i className={accIcon}></i> : <i className={'icon icon--arrow-small'}></i>
                }

            </button>
            <div key={1}
                className={`bf-accordion-deploy-area ${activeItem ? `active` : ''}`}
                style={{ height: childrenHeight , opacity: activeItem ? 1 : cssOpacity }}
            >
                <div ref={stageCanvasRef}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default BFAccordion;