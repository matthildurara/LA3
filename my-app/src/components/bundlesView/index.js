import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import BundlesItem from '../bundlesItem';

const BundlesView = ({item}) => {
    const {id, name, items } = item;
    return (
        <Link to={"/bundles/" + id}>
        <div className='bundle-view mb-4 box-shadow' style={styles}>
            <h2>{name}</h2> 
            <div className='bundle-item'>
                {items.map(b => <BundlesItem key={b.id} item={b} />) }
            </div>
        </div>
        </Link>
    );
}

export default BundlesView;