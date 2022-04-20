
import React, {useState, useEffect, useRef} from 'react'

const BFShowAndExit = (props) => {

    const {
        className = '',
        children = '',
        duration = 9000,
        permanent = false
    } = props;

    const [show, setShow] = useState(false);
    const [childrenHeight, setChildrenHeight] = useState();
    const [cssOpacity, setCssOpacity] = useState();

    const stageCanvasRef = useRef(null);

    useEffect(() => {

        let timeToHeightAuto;
        let timeToHeightZero;

        let fadeIn = setTimeout(() => {
            setShow(true);

            let height = stageCanvasRef.current.offsetHeight;
            setChildrenHeight(height + 'px');
            
            timeToHeightAuto = setTimeout(function () {
                setChildrenHeight('auto');
                setCssOpacity(1);
                clearTimeout(timeToHeightAuto);
            }, 500);

            clearTimeout(fadeIn);
        },100);

        let fadeOut;
        if(!permanent){
            fadeOut = setTimeout(() => {
                setShow(false);
                let height = stageCanvasRef.current.offsetHeight;
                setChildrenHeight(height + 'px');
                setCssOpacity(0);
                timeToHeightZero = setTimeout(function () {
                    setChildrenHeight(0);
                    clearTimeout(timeToHeightZero);
                }, 1000);

                clearTimeout(fadeOut);
            },duration);
        }

        return ()=>{
            clearTimeout(fadeIn);
            clearTimeout(fadeOut);
            clearTimeout(timeToHeightAuto);
            clearTimeout(timeToHeightZero);
        }

    }, [duration, permanent]);

    return (
        <div 
            className={`bf-show-and-exit ${show ? 'bf-show-and-exit--show' : ''} ${className}`}
            style={{ height: childrenHeight , opacity: cssOpacity }}
        >
            <div ref={stageCanvasRef}>
                {
                    children
                }
            </div>
        </div>
    )
}

export default BFShowAndExit;
