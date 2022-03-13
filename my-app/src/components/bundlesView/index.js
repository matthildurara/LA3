import React from 'react';
import styles from './styles.css';
import BundlesItem from '../bundlesItem';
import { getBubbleById, } from '../../services/bubbleService';
import PropTypes from 'prop-types';
import { addToCart } from '../../services/cartService';

const BundlesView = ({item}) => {
    const {name, items } = item;
    const AddAllItemsToCart = async() => {
        console.log(items);
        items.forEach(async item => {
            console.log(`item in add bundles ${item}`);
            let bubble = (await getBubbleById(item));
            console.log(`bubble item ${bubble}`);
            addToCart(bubble);
       });
    }
    return (
        <div className='bundle-view mb-4 box-shadow' style={styles}>
            <h2>{name}</h2> 
            <div className='bundle-item'>
                {items.map(b => <BundlesItem key={b.id} item={b} />) }
                <div onClick={ () => AddAllItemsToCart() }className="add-bundle-to-cart" style={styles}> Add to cart</div>
            </div>
        </div>
    );
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

export default BundlesView;