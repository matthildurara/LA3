import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { getBubbleById } from '../../services/bubbleService';
import { useParams } from "react-router-dom";
import styles from './styles.css';
import { addToCart } from '../../services/cartService';
import { useAlert } from 'react-alert';




const BubbleItem = () => {
    const alert = useAlert()


    // let { bubbleId } = useParams();
    const { bubbleId } = useParams();
    const [bubble,setBubble] = useState({});
    useEffect(() => {
        (async () => {
            setBubble( await getBubbleById(bubbleId));
        })();
    },[bubbleId]);
    console.log(bubble);

    const addCart = (bubble) =>{
        addToCart(bubble);
        alert('Bubble added to cart');

    }
    return(
        <div className="bubble-item" style={styles}>
            <div className='bubble-title' style={styles}>{bubble.name}</div>
            <img className='bubbe-img' style={styles} src={bubble.image} alt='bubble-img'></img>
            <div className='bubble-description'>{bubble.description}</div>
            <div className='bubble-price'>{bubble.price + '$'}</div>
            <button onClick={addCart(bubble) }className="add-to-cart" style={styles}> Add to cart</button>

        </div>
        
        )
    }

BubbleItem.propTypes = {
    bubble: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }))
};
export default BubbleItem;