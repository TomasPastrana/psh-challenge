
import React, {useEffect, useState} from 'react';

const BFMainCover = (props) => {
    const {
        className,
        fadeIn = false,
        children
    } = props;

    const [startFade, setStartFade] = useState(false);

    useEffect(() => {
        let timerFadeIn = setTimeout(() => setStartFade(true), 100);
        return () => {
            clearTimeout(timerFadeIn);
        };
    },[]);

    return (
        <div className={`bf-main-cover ${className ? className : ''} ${fadeIn ? 'bf-main-cover--with-fade' : ''} ${startFade ? 'active' : ''}`}>
            {
                children
            }
        </div>
    )
}

export default BFMainCover;
