import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.css';
import logo from '../img/bubbleLogo.png';

const Navbar = () => {
    return (
        <>
        <div className='nav-links' style={styles}>
        <img src={logo} alt="BubblyLogo"></img>
        <ul >
            <li >
                <Link to="/bubbles">Products</Link>
            </li>
            <li  >
                <Link to="/bundles">Bundles</Link>
            </li>
            <li  >
                <Link to="/about">About us</Link>
            </li>
            <li  >
                <Link to="/cart">Cart</Link>
            </li>
        </ul>
        </div>
        </>
    );
    };
export default Navbar;