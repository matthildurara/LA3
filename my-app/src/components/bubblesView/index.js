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
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    })
};
export default BubbleView;