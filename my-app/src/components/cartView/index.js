import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import PropTypes from 'prop-types';
import { addToCart } from '../../services/cartService';

const CartView = ({item}) => {
    return (
        <div className='container-bubble'>
        <div className='bubble-view ' style={styles}>
                <img className='bubble-img' src={item.image}/>
                <div className='bubble-item'>{item.name}</div>
                <div className='bubble-item'>{item.price+'$'}</div>
        </div>
        <div onClick={ () => addToCart(item) }className="remove-cart" style={styles}> Remove from cart</div>
        </div>

    )
};
CartView.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    })
};
export default CartView;