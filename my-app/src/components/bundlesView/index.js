import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

const BundlesView = ({item}) => {
    return (
        <Link to={"/bundles/" + item.id}>
        <div className='bundle-view mb-4 box-shadow' style={styles}>
                <div>{item.name}</div>

        </div>
        </Link>
    )
};
export default BundlesView;