import React, { useEffect,useState } from 'react';
import styles from './styles.css';
import BundlesItem from '../bundlesItem';
import { AddBundleToCart } from '../../services/cartService';
import { getBubbleById } from '../../services/bubbleService';
import PropTypes from 'prop-types';

const BundlesView = ({item}) => {
    const {name, items } = item;
    return (
        <div className='bundle-view mb-4 box-shadow' style={styles}>
            <h2>{name}</h2> 
            <div className='bundle-item'>
                {items.map(b => <BundlesItem key={b.id} item={b} />) }
                <div onClick={ () => AddAllItemsToCart({items}) }className="add-to-cart" style={styles}> Add to cart</div>
            </div>
        </div>
    );
}

const AddAllItemsToCart = ({items}) => {
    const [bubble,setBubble] = useState({});
    useEffect(() => {
        (async () => {
            setBubble( await getBubbleById(items[0]));
        })();
    },[items[0]]);
    console.log(bubble)
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

export default BundlesView;