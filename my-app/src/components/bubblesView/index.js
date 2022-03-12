import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import PropTypes from 'prop-types';
import { addToCart } from '../../services/cartService';

const BubbleView = ({item}) => {
    console.log('bubble Item: ', item);
    return (
        <div className='container-bubble'>
        <Link to={"/bubbles/" + item.id}  style={{ textDecoration: 'none'}}>
        <div className='bubble-view ' style={styles}>

                <img className='bubble-img' src={item.image}/>
                <div className='bubble-item'>{item.name}</div>

                <div className='bubble-item'>{item.price+'$'}</div>

                {/* <div onClick={ () => addToCart(item) }className="add-to-cart" style={styles}> Add to cart</div> */}
        </div>
        </Link>
        <div onClick={ () => addToCart(item) }className="add-to-cart" style={styles}> Add to cart</div>
        </div>

    )
};
BubbleView.propTypes = {
    // The bubble, set as an item
    item: PropTypes.shape({
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
    })
};

export default BubbleView;