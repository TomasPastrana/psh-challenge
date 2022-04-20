
import React, { useState, useRef, useEffect } from 'react';

const BFFloatingElement = (props) => {
    const {
        showOnScrollTop = 600,
        hideOnScrollTop,
        className,
        exampleMode = false,
        children
    } = props;

    const [scrollPosition, setScrollPosition] = useState(0);
    const myRef = useRef(null);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {
                <div className={`bf-floating-element ${className ? className : ''} ${scrollPosition >= showOnScrollTop ? 'active' : ''} ${hideOnScrollTop ?   scrollPosition >= hideOnScrollTop ? 'hide' : ''   : ''} ${exampleMode ? 'bf-floating-element--example-mode' : ''}`}
                    ref={myRef}
                >
                    {
                        children
                    }
                    {
                        exampleMode ? <span>This is only an example. delete this prop or change
                            this prop to false and add your on class with your own styles</span>
                            : ''
                    }
                </div>
            }
        </>
    )
}

export default BFFloatingElement;
