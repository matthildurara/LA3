import React, { useEffect,useState } from 'react';
import { getCart } from '../../services/cartService';
import ReviewView from '../reviewView';
import styles from './styles.css';

import { useSelector} from 'react-redux'; 
import BundlesView from '../bundlesView'
import { getBundlesService } from '../../services/bundleService';




const Review = () => {
    // const [customer,setcustomer] = useState({});
    let cust = localStorage.getItem('customer');
    var cart = getCart();
    // setcustomer(cust);
    // let items = JSON.parse(localStorage.getItem('item'));
    console.log(cust);
    return (
        <div >
            <h1>Review</h1>
            <div>{cust}</div>
            <div className='review-container' style={styles}>
            {Object.values(cart).map((item ,index) => ( 
                 <ReviewView key={index} item={item} />
                            ))} 
                            </div>
            <div> Finish</div>


        </div>
    )
}

export default Review;