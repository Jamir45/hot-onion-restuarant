import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Logo from '../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {

    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-white py-2 fixed-top">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <img src={Logo} alt="Hot Onion Logo"/>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;