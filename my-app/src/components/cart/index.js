import React, { useState } from 'react';
import { clearCart,getCart } from '../../services/cartService';
import CartView from '../cartView';
import { Link } from 'react-router-dom';
import styles from './styles.css';


const Cart = () => {
    const [phone,setPhone] = useState("")
    var cart = getCart();
    let total = 0;
    console.log(cart);
    cart.forEach(element => {
        total += element.price;
    });
    const handlePhoneChange = e =>{
        console.log(phone);
        setPhone(e.target.value)
    }

    return(
        <>
        <div className="yourCart">Your cart</div>
        <div>
            {Object.values(cart).map((item ,index) => ( 
                <CartView key={index} item={item} />
                ))} 
        </div>
            <Link to={"/checkout" }  style={{ textDecoration: 'none'}}>
                <div className='checkout' style={styles}>Checkout</div>
            </Link>
            <div className='total' style={styles}>Total price: {total}$</div>
            <div className="previousOrders" >Previous orders</div>
        <form>
            <input type='text' placeholder='Phonenumber' value={phone} onChange={handlePhoneChange} />
            <Link to={`/orders/${phone}`} style={{ textDecoration: 'none'}}>
                <div className='previous' style={styles}>See previous orders</div>
            </Link>
        </form>
        </>
    )
}
export default Cart;