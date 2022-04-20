

import React, {useState, useEffect} from 'react';

const BFStepBox = (props) => {
    const {
        className = '',
        stepTotal = 6,
        stepCurrent = 0,
    } = props;

    const [addCurrent, setAddCurrent] = useState();

    const buildSteps = ()=>{

        var itemCollection = [];
        for (let i = 0; i < stepTotal; i++) {
            itemCollection.push(
                <div key={i} className={`bf-step-box__item ${addCurrent === i ? 'active' : ''} ${ i < addCurrent ? 'visited' : '' }`}>
                    <i className={'icon icon--check-thin'}></i>
                    <span>{i + 1}</span>
                </div>
            );
        }
        return itemCollection;

    }

    useEffect(() => {
        let fadeInActive = setTimeout(()=>{
            setAddCurrent(stepCurrent);
            clearTimeout(fadeInActive);
        },100);
        return () => {
            clearTimeout(fadeInActive);
        }
    }, [stepCurrent]);

    return (
        <>
            <div className={`bf-step-box ${className}`}>
                {
                    buildSteps()
                }
            </div>
        </>
    )
}

export default BFStepBox;
