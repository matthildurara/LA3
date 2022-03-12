import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { getBubbleById } from '../../services/bubbleService';
import { useParams } from "react-router-dom";
import styles from './styles.css';
import { addToCart } from '../../services/cartService';




const BubbleItem = () => {


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
export default BubbleItem;