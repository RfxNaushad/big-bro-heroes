import React from 'react';
import './Header.css';
import logo from '../../images/download.jpg'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt='/'></img>
            <div className="heroes-lorem">
                 <p>Time to beat Thanos</p>
            </div>
        </div>
    );
};

export default Header;