import { useEffect, useState, useContext} from 'react';

//Provider
import { AppContext } from 'context/provider';

export default function LoadingSpinner(props) {
    const { logout} = useContext(AppContext);

    const [active,setValue] = useState(false);
    const state = {
        warningTime: 1000 * 60 * 3, // 3 minutos
        signoutTime: 1000 * 60 * 5, //5 minutos
        }

    let warnTimeout;
    let logoutTimeout 

    

    useEffect (()=>{
        setValue(props.active);

        const events = [
        'load',
        'mousemove',
        'mousedown',
        'click',
        'scroll',
        'keypress'
        ];

        if(active){
            for (var i in events) {
                window.removeEventListener(events[i], resetTimeout);
                window.addEventListener(events[i], resetTimeout);
            }

            setTimeoutInit();
        }else{
            for (var x in events) {
                window.removeEventListener(events[x], resetTimeout);
            }
            if (warnTimeout) clearTimeout(warnTimeout);
            if (logoutTimeout) clearTimeout(logoutTimeout);
        }

    }, [active]); //eslint-disable-line


    const clearTimeoutFunc = () => {
        if (warnTimeout) clearTimeout(warnTimeout);
        if (logoutTimeout) clearTimeout(logoutTimeout);
    };

    const setTimeoutInit = () => {
        if(active){
           warnTimeout = setTimeout(warn, state.warningTime);
           logoutTimeout = setTimeout(autoLogout, state.signoutTime);
        }
    };

    const resetTimeout = () => {
        clearTimeoutFunc();
        setTimeoutInit();
    };

    const warn = () => {
        console.log('AUTOLOGOUT You will be logged out automatically in X minute.');
    };

    const autoLogout = () => {
        logout();
    };

    return ('')
      
  }
