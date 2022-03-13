import React from 'react';
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
        </div>
    )
};
CartView.propTypes = {
    // The bubble prodouct
    bubble: PropTypes.arrayOf(PropTypes.shape({
        // The individual value of the bubble
        id: PropTypes.number.isRequired,
        // The name of the bubble
        name: PropTypes.string.isRequired,
        // The Description for that bubble
        description: PropTypes.string.isRequired,
        // How much the bubble costs
        price: PropTypes.number.isRequired,
        // An url link to an image for the bubble
        image: PropTypes.string.isRequired,
    }))
};
export default CartView;