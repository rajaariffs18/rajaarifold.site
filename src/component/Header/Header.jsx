import React from 'react';

import './Header.css';

// get our fontawesome imports
// import { FontAwesomeIcon } from 'node_modules/@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="header">
            <div className="col-2">
                <h2 className="brand">rajaarif.site</h2>
                <span className="social-media">
                </span>
            </div>
            <p className="deskripsi">Catatan dalam proses belajar.</p>
            <hr/>
        </div>
    )
}

export default Header;