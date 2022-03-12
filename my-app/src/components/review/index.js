import React, { useEffect,useState } from 'react';
import { getCart } from '../../services/cartService';
import ReviewView from '../reviewView';
import styles from './styles.css';
import { useLocation } from "react-router-dom";


const Review = () => {
    const location = useLocation(); 
    console.log(location);
     const {customer} = location.state;
    console.log(`customer: ${customer}`);
    // console.log(`the form is: ${formin.state}`);
    // const {name,phone} = (location.state.customerPickup);
    // console.log(name);
    //  console.log(`formin: ${location.state}`);
    // const [customer,setcustomer] = useState({});
    let cust = localStorage.getItem('customer');
    var cart = getCart();
    // setcustomer(cust);
    // let items = JSON.parse(localStorage.getItem('item'));
    console.log(cust);
    const handleConfirm = () => {
        
    }
    return (
        <div >
            <h1>Review</h1>
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
            <div> Confirm</div>


        </div>
    )
}

export default Review;