import React from 'react';
import { clearCart,getCart } from '../../services/cartService';
import CartView from '../cartView';


// import styles from './styles.css';


const Cart = () => {
    var cart = getCart();
    return(
        <>
        <div>Your cart</div>
        <div> hello checking if cart works</div>
        <div onClick={() => clearCart() }>clear cart</div>
             {Object.values(cart).map(item => ( 
                     
                 <CartView key={item.id} item={item} />
                            ))} 
        </>
    )
}
export default Cart;