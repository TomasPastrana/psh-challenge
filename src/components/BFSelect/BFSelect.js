
import { data } from 'browserslist';
import React, { useEffect, useState, useRef, useCallback} from 'react';
import arrowExample from '../BFSelect/img/icon--arrow.svg';

const BFSelect = (props) => {
    const {
        className,
        options,
        defaultKey = 0,
        outputValue,
        outputPosition,
        action,
    } = props;

    const myRef = useRef();

    const [selectedValue, setSelectedValue] = useState();
    const [selectedLabel, setSelectedLabel] = useState();
    const [selectedIcon, setSelectedIcon] = useState();
    /* eslint-disable */
    const [selectedKey, setSelectedKey] = useState(0);
    /* eslint-disable */

    const [selectIsOpen, setSelectIsOpen] = useState(false);

    useEffect(() => {
        setSelectIsOpen(false);
        setSelectedLabel(options ? options[defaultKey].label : 0);
        setSelectedIcon(options ? options[defaultKey].icon : 0);
    }, [])

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    const onHandleClick = useCallback((e) => {  
        // returns the same function when re-rendered
        const selectedItemLabel = e.currentTarget.getAttribute('data-label');
        const selectedItemIcon = e.currentTarget.getAttribute('data-icon');
        const selectedItemValue = e.currentTarget.getAttribute('data-value');
        const selectedItemKey = e.currentTarget.getAttribute('data-key');
        const selectedItemActionTarget = e.currentTarget.getAttribute('data-action-target');

        if(action){
            action(selectedItemActionTarget)
        }

        setSelectedLabel(selectedItemLabel);
        setSelectedIcon(selectedItemIcon);
        setSelectedKey(selectedItemKey);
        
        setSelectedValue(selectedItemValue);
        
        outputValue(selectedItemKey > 0  ? selectedItemLabel : false);
        outputPosition(selectedItemKey ? selectedItemKey : 0);
        setSelectIsOpen(false);
     });

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setSelectIsOpen(false);
        }
    };

    const handleDeployMenu = () => {
        setSelectIsOpen(!selectIsOpen);
    }

    const selectStructure = () => {
        return (
            <select value={selectedValue} readOnly>
                {
                    options ?
                        options.map((obj, i) => (
                            <option
                                key={i}
                                data-key={i}
                                value={obj.value}
                            >
                                {obj.label}
                            </option>
                        ))
                        :
                        ''
                }
            </select>
        )
    }

    const dropDownStructure = () => {
        return (
            <>
                <button type={'button'} onClick={handleDeployMenu} className={`${selectIsOpen ? 'active' : ''}`}>
                    <span>
                        {
                            selectedIcon ?
                                <i className={`${selectedIcon}`}></i>
                                : ''

                        }
                        <span>{selectedLabel}</span>
                    </span>
                    {
                        <i>
                            <img src={arrowExample} alt={'arrow example'} />
                        </i>
                    }
                </button>
                <div className={`bf-select--deploy-area ${selectIsOpen ? 'active' : ''}`}>
                    <ul>
                        {
                            options ?
                                options.map((obj, i) => {
                                    return (
                                        <li
                                            key={i}
                                            data-key={i}
                                            data-value={obj.value}
                                            data-label={obj.label}
                                            data-icon={obj.icon}
                                            onClick={onHandleClick}
                                            className={`${selectedValue === obj.value  ? 'active' : ''}`}
                                            data-action-target={obj.actionTarget ? obj.actionTarget : ''}
                                        >
                                            {
                                                obj.icon ?
                                                    <i className={obj.icon}></i>
                                                    : ''
                                            }
                                            <span>{obj.label}</span>
                                        </li>
                                    )

                                })
                                :
                                ''
                        }
                    </ul>
                </div>
            </>
        )
    }



    return (
        <>
            <div ref={myRef} className={`bf-select ${className ? className : ''}`}>

                { selectStructure() }
                { dropDownStructure() }

            </div>
        </>
    )
}



export default BFSelect;