
import React, { useState, useRef, useEffect, useContext } from 'react';
//Mixpanel
import { MixpanelContext } from 'context/MixpanelContext';

const BFExpand = (props) => {
    const {
        children,
        className,
        textInitial = 'Open',
        textEnd = 'Close',
        initialHeight = 400,
        mobileEnabled = true,
        mixPanelTrackClick
    } = props;

    const [buttonText, setButtonText] = useState(textInitial);
    const [isOpen, setIsOpen] = useState(false);
    const [childrenHeight, setChildrenHeight] = useState(initialHeight);
    const [expandCancel, setExpandCancel] = useState(false);
    const stageCanvasRef = useRef(null);

    //Mixpanel
    const Mixpanel = useContext(MixpanelContext); //eslint-disable-line

    const handleClick = (mixPanelTrackClick) => {
        
        if(mixPanelTrackClick){
            // const host = window.location.host;
            const pathName = window.location.pathname;
            Mixpanel.track(mixPanelTrackClick.event, {
                product: mixPanelTrackClick.productName,
                page_path: pathName
            });
        }

        setIsOpen(!isOpen);

        if(!isOpen){
            setButtonText(textEnd);
        }else{
            setButtonText(textInitial);
        }
        childrenHeightEvents();
    }

    const childrenHeightEvents = ()=>{
        if(stageCanvasRef.current){
            let height = stageCanvasRef.current.offsetHeight;
            
            if(!isOpen){
                setChildrenHeight(height + 'px');
                setTimeout(function(){
                    setChildrenHeight('auto');
                },600);
            }else{
                setChildrenHeight(height + 'px');
                setTimeout(function(){
                    setChildrenHeight(initialHeight + 'px');
                },100);
            }
        }
    }

    useEffect(() => {
        let componentBaseHeight = initialHeight + 200;
        let height = stageCanvasRef.current.offsetHeight;

        if(height > componentBaseHeight ){
            //Run component behaviours
        }else{
            //Cancel component behaviours
            setExpandCancel(true);
        }

    }, [initialHeight])

    return (
        <>
            <div className={`bf-expand ${className ? className : ''} ${ mobileEnabled ? '' : 'bf-expand--mobile-disabled'} ${expandCancel ? 'expand-canceled' : ''}`}>
                <div className={`bf-expand--deploy-area ${isOpen ? 'active' : ''}`} style={{ height : childrenHeight }}>
                    <div className={'bf-expand--content'} ref={stageCanvasRef}>
                        {
                            children
                        }
                        <div className={'bf-expand--deploy-area__shadow-box'}></div>
                    </div>
                </div>
                <button
                    className={`bf-expand__button ${isOpen ? 'active' : ''}`}
                    type={'button'}
                    onClick={
                        ()=>{
                            handleClick(mixPanelTrackClick);
                        }
                    }
                >
                    <span>{buttonText}</span>
                </button>
            </div>
        </>
    )
}

export default BFExpand;
