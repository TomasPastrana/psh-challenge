
import React from 'react';

const BFScrollTo = (props) => {
    const {
        children = '',
        scrollTo = '',
        addNavigatorHash = false,
        className = '',
        clickFunction = null
    } = props;

    const handleClick = () => {
        scrollTo.current.scrollIntoView({ block: "start", behavior: "smooth" });
        if (addNavigatorHash) {
            let time = setTimeout(()=>{
                window.location.hash = addNavigatorHash;
                clearTimeout(time);
            },500)
        }
    }

    return (
        <>
            <button
                type={'button'}
                onClick={() => {
                    if (clickFunction) {
                        clickFunction()
                    }
                    handleClick()
                }} className={className}>
                {
                    children
                }
            </button>
        </>
    )
}

export default BFScrollTo;
