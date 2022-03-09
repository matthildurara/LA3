import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { getBubbleById } from '../../services/bubbleService';
import styles from '../bubbleItem/styles.css';
import { addToCart } from '../../services/cartService';
import { Link } from 'react-router-dom';


const BundlesItem = ({item}) => {
    const [bubble,setBubble] = useState({});
    useEffect(() => {
        (async () => {
            setBubble( await getBubbleById(item));
        })();
    },[item]);
    
    return(
        <div className='container-bubble'>
        <Link to={"/bubbles/" + bubble.id}  style={{ textDecoration: 'none'}}>
        <div className='bubble-view ' style={styles}>
                <img className='bubble-img' src={bubble.image}/>
                <div className='bubble-item'>{bubble.name}</div>

                <div className='bubble-item'>{bubble.price+'$'}</div>

                {/* <div onClick={ () => addToCart(item) }className="add-to-cart" style={styles}> Add to cart</div> */}
        </div>
        </Link>
        <div onClick={ () => addToCart(bubble) }className="add-to-cart" style={styles}> Add to cart</div>
        </div>
    )
}

BundlesItem.propTypes = {
    bubble: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }))
};
export default BundlesItem;