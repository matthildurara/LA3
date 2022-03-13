import React, { useEffect,useState } from 'react';
import { getCart } from '../../services/cartService';
import ReviewView from '../reviewView';
import styles from './styles.css';
import { useLocation } from "react-router-dom";
import { saveOrder } from '../../services/orderService';
import { clearCart } from '../../services/cartService';
import { Link } from 'react-router-dom';


const Review = () => {
    const location = useLocation(); 
    const {customer} = location.state;
    var cart = getCart();
    const handleConfirm = (cart,customer) => {
        let order = {}
        const phone = customer.phone;
        order['cart'] = cart;
        order['customer'] = customer;
        saveOrder(order,phone);
        clearCart()
    }

    return (
        <div >
            <h1>Review</h1>
            {customer.address?
            <div>Delivery</div>
            : 
            <div>Pickup</div>
            }
            <br></br>
            <div>{`Name: ${customer.name}`}</div>
            <br></br>
            <div>{`Telephone: ${customer.phone}`}</div>
            {customer.address? 
                <div>
                <p>{`Address: ${customer.address}`} </p>
                <p> {`City: ${customer.city}`}</p>  
                <p> {`Code: ${customer.code}`}</p>  
                </div>
                :
                <></>
            }
            <div className='review-container' style={styles}>
            {Object.values(cart).map((item ,index) => ( 
                 <ReviewView key={index} item={item} />
                            ))} 
                            </div>
            <Link to={"/confirmation" }  style={{ textDecoration: 'none'}}>
                <div onClick={ () => handleConfirm(cart,customer) }className="review-confirm" > Confirm</div>
            </Link>
        </div>
    )
}

export default Review;