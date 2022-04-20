
import React, { useState } from 'react';

const BFTabs = (props) => {
    const {
        className,
        children,
        tabs,
        defaultTab = 0
    } = props;

    const [selectedTaget, setSelectedTarget] = useState(defaultTab + '');

    const handleClick = (e) => {
        const itemTarget = e.target.getAttribute('data-tab-target');
        console.log(itemTarget);
        setSelectedTarget(itemTarget);
    }

    const buildTabs = () => {
        return (
            tabs ? tabs.map((obj, i) => (
                <button
                    key={i}
                    type={'button'}
                    data-tab-target={i}
                    onClick={handleClick}
                    className={`bf-tabs__button ${selectedTaget === '' + i ? 'active' : ''}`}
                >
                    <strong>{obj.tabName}</strong>
                </button>
            )) : ''
        )
    };

    return (
        <>
            <div className={`bf-tabs--parent ${className ? className : ''}`}>
                <div className={'bf-tabs'}>
                    {
                        buildTabs()
                    }
                </div>
                <div className={'bf-tabs--target--group'}>
                    {
                        children ? children.map((obj, i) => {
                            return (
                                <div
                                    key={i}
                                    className={`bf-tabs--target__element ${selectedTaget === '' + i ? 'active' : ''}`}
                                >
                                    {
                                        obj
                                    }
                                </div>
                            )
                        }) : ''
                    }
                </div>
            </div>
        </>
    )
}

export default BFTabs;