import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <>
        <div className='nav-links'>
        <ul >
            <li >
                <Link to="/">Products</Link>
            </li>
            <li  >
                Bundles
            </li>
            <li  >
                About us
            </li>
            <li  >
                Cart
            </li>
        </ul>
        </div>
        </>
    );
    };
export default Navbar;