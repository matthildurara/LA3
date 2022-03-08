import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

const BubbleView = ({item}) => {
    return (
        <Link to={"/bubbles/" + item.id}>
        <div className='bubble-view mb-4 box-shadow' style={styles}>
                <img className='bubble-img' src={item.image}/>
                <div>{item.name}</div>
                <div>{item.price}</div>
        </div>
        </Link>
    )
};
export default BubbleView;