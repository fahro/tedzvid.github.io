import React from 'react';
import './style.css';

import logo from '../../images/tajweed.png';

export default () => (
    <div className="navbar">
        <div>
            <div className="menu">
                <div className="menu-item">
                    <a href="/">
                        <img src={logo} />
                        <span>Tedzvid</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
);