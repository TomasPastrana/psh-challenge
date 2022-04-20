
import React from 'react';


const UserHead = () => {
    return (
        <div className={'bf-user-head'}>
            <div className="container">
                <div className="row">
                    <div className="col-md-11">
                        <div className={'bf-circle-img'}>
                            <img src={'img'} alt={'User img'}/>
                        </div>
                        <h2>Hola {'Juan'}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserHead;
