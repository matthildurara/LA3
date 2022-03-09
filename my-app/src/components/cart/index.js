import React, { useState } from 'react';
import { clearCart,getCart } from '../../services/cartService';
import CartView from '../cartView';
import { Link } from 'react-router-dom';


// import styles from './styles.css';


const Cart = () => {
    const [phone,setPhone] = useState()
    var cart = getCart();
    return(
        <>
        <div>Your cart</div>
        <div> hello checking if cart works</div>
        <div onClick={() => clearCart() }>clear cart</div>
             {Object.values(cart).map((item ,index) => ( 
                 <CartView key={index} item={item} />
                            ))} 
        <div>Previous orders</div>
        <input type='tel' placeholder='Phonenumber' phone={phone} onChange={(phone) => setPhone(phone)} />
        <Link to={"/orders/" + phone}>
        <div className='previous'>See previous orders</div>
        </Link>
        </>
    )
}
export default Cart;