
import React, {useState,useEffect} from 'react';

const BFFade = (props) => {
    const {
        children = '',
        className = '',
    } = props;

    const [showElement, setShowElement] = useState(false);

    useEffect(() => {
        let showTime = setTimeout(function(){
            setShowElement(true);
        },100);
        return () => {
            clearTimeout(showTime);
        }
    },[])
    
    return (
        <>
            <div className={`bf-fade ${showElement ? 'show' : '' } ${className ? className : ''}`}>
                {
                    children
                }
            </div>
        </>
    )
}

export default BFFade;
