import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import PropTypes from 'prop-types';
import { addToCart } from '../../services/cartService';

const PrevOrderList = ({item}) => {
    const {customer,cart} = item.order;
    console.log(`customer: ${customer}`);
    console.log('prev Item: ', item);

    const addItemsToCart = async() => {
        console.log(cart);
        cart.forEach(async item => {
            addToCart(item);
       });
        
    }
    return (
        <div className='prev-cart-container' style={styles}>
        <div className='prev-view ' style={styles}>
            {Object.values(cart).map(item => (
            <div className="prev-item" key={item.id}>
                <img className='prev-img' src={item.image}/>
                <div className='prev-name'>{item.name}</div>
                <div className='prev-price'>{item.price+'$'}</div> 
            </div>
            ))}
        </div>
        <div onClick={ () => addItemsToCart() } className='add-prev'>Add to Cart</div>
        </div>
    )
};

export default PrevOrderList;