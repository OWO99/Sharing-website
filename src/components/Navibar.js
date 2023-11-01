// @flow
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceLaughWink  } from '@fortawesome/free-regular-svg-icons'
function Navibar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to={'/'} className={'navbar-logo'}> Share <FontAwesomeIcon icon={faFaceLaughWink}/>
                    </Link>

                </div>
            </nav>
        </>
    );
};

export default Navibar