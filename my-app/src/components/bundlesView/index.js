import React from 'react';
import styles from './styles.css';
import BundlesItem from '../bundlesItem';

const BundlesView = ({item}) => {
    const {name, items } = item;
    return (
        <div className='bundle-view mb-4 box-shadow' style={styles}>
            <h2>{name}</h2> 
            <div className='bundle-item'>
                {items.map(b => <BundlesItem key={b.id} item={b} />) }
            </div>
        </div>
    );
}

export default BundlesView;