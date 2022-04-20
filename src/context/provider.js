import React, { createContext, useState } from 'react';
// services

export default function Provider(props) {

    const [loading, setLoading] = useState(false);
    const [layoutType, setLayoutType] = useState('');

    //provider vars
    const provider = {
        layoutType,
        loading,
        setLayoutType,
        setLoading,
    };

    return (
        <>
            <AppContext.Provider 
                value={provider}>
                {props.children}
            </AppContext.Provider>
        </>
    )
}

export const AppContext = createContext();
