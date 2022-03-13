import React, { useState } from 'react';
import { clearCart,getCart } from '../../services/cartService';
import CartView from '../cartView';
import { Link } from 'react-router-dom';
import styles from './styles.css';



// import styles from './styles.css';


const Cart = () => {
    const [phone,setPhone] = useState("")
    var cart = getCart();

    const handlePhoneChange = e =>{
        // const phone = event.target.phone
        console.log(phone);
        setPhone(e.target.value)
        // setPhone(values => ({...values,phone}))
        // setPhone(phone);
    }
    // console.log(phone);
    return(
        <>
        <div className="yourCart">Your cart</div>
        {/* <div onClick={() => clearCart() }>clear cart</div> */}
        <div>
             {Object.values(cart).map((item ,index) => ( 
                 <CartView key={index} item={item} />
                            ))} 
                            </div>
       <Link to={"/checkout" }  style={{ textDecoration: 'none'}}>
            <div className='checkout' style={styles}>Checkout</div>
            </Link>
        <div className="previousOrders">Previous orders</div>
        <form>
        <input type='text' placeholder='Phonenumber' value={phone} onChange={handlePhoneChange} />

        <Link to={`/orders/${phone}`}>
        <div className='previous'>See previous orders</div>
        </Link>
        </form>
        </>
    )
}
export default Cart;