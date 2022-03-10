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
    bubble: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }))
};
export default BundlesItem;