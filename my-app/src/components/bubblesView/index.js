import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

const BubbleView = ({item}) => {
    return (
        <Link to={"/bubbles/" + item.id}  style={{ textDecoration: 'none'}}>
        <div className='bubble-view ' style={styles}>

                <img className='bubble-img' src={item.image}/>
                <div className='bubble-item'>{item.name}</div>

                <div className='bubble-item'>{item.price+'$'}</div>

                <div className="add-to-cart" style={styles}> Add to cart</div>
        </div>
        </Link>

    )
};
export default BubbleView;