
import React, {useContext} from 'react';
import { AppContext } from 'context/provider';
import { Link } from 'react-router-dom';

const UserSidebar = (props) => {

    const {
        activeMenuItem
    } = props;

    const { logout, origin} = useContext(AppContext);

    return (
        <aside className={'bf-sidebar'}>

            <ul>
                <li>
                    <Link className={`bf-side-button ${activeMenuItem === 'mi-perfil' ? 'active' : ''}`} to={'/account/profile'}>
                        <div className={'bf-circle bf-circle--3 mr-3'}>
                            <i className={'icon icon--user'}></i>
                        </div>
                        <span>Datos personales</span>
                    </Link>
                </li>
                <li>
                    <Link className={`bf-side-button ${activeMenuItem === 'suscripciones' ? 'active' : ''}`} to={'/account/subscriptions'}>
                        <div className={'bf-circle bf-circle--3 mr-3'}>
                            <i className={'icon icon--history'}></i>
                        </div>
                        <span>Suscripciones</span>
                    </Link>
                </li>
                <li>
                    <Link className={`bf-side-button ${activeMenuItem === 'medios-de-pago' ? 'active' : ''}`} to={'/account/payment-methods'}>
                        <div className={'bf-circle bf-circle--3 mr-3'}>
                            <i className={'icon icon--credit-card'}></i>
                        </div>
                        <span>Medios de pago</span>
                    </Link>
                </li>
                    
                {
                origin !== 'app' ?
                    <li>
                        <button className={`bf-side-button ${activeMenuItem === 'notificaciones' ? 'active' : ''}`} onClick={logout}>
                            <div className={'bf-circle bf-circle--3 mr-3'}>
                                <i className={'icon icon--logout'}></i>
                            </div>
                            <span>Cerrar sesión</span>
                        </button>
                    </li>
                : ''
                }
            </ul>

        </aside>
    )
}

export default UserSidebar
