import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import bundlesItem from '../bundlesItem';

const BundlesView = ({item}) => {
    return (
        <Link to={"/bundles/" + item.id}>
        <div className='bundle-view mb-4 box-shadow' style={styles}>
                <h2>{item.name}</h2> 
                <div className='bundle-item'>
                    {item.items.map(b => <bundlesItem key={b.id}/>) }
                </div>


        </div>
        </Link>
    )
};
export default BundlesView;