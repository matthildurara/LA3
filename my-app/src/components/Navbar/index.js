import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.css';

const Navbar = () => {
    return (
        <>
        <div className='nav-links' style={styles}>
        <img src="img/bubbleLogo.jpg" alt="BubblyLogo"></img>
        <ul >
            <li >
                <Link to="/">Products</Link>
            </li>
            <li  >
                <Link to="/">Bundles</Link>
            </li>
            <li  >
                <Link to="/">About us</Link>
            </li>
            <li  >
                <Link to="/">Cart</Link>
            </li>
        </ul>
        </div>
        </>
    );
    };
export default Navbar;