import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { getBubbleById } from '../../services/bubbleService';
import { useParams } from "react-router-dom";
import styles from './styles.css';


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
    return(
        <div className="bubble-item" style={styles}>
            <div className='bubble-title' style={styles}>{bubble.name}</div>
            <img className='bubbe-img' style={styles} src={bubble.image} alt='bubble-img'></img>
            <div className='bubble-description'>{bubble.description}</div>
            <div className='bubble-price'>{bubble.price + '$'}</div>
            <div className="add-to-cart" style={styles}> Add to cart</div>
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