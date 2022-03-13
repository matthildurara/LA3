import React, { useEffect,useState } from 'react';
import styles from '../bubbleItem/styles.css';
import { Link } from 'react-router-dom';
import { getBubbleById } from '../../services/bubbleService';
import PropTypes from 'prop-types';

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
            </div>
        </Link>
    </div>
    )
}

BundlesItem.propTypes = {
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
export default BundlesItem;