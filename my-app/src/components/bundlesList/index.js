import React, { useEffect,useState } from 'react';
import { useSelector} from 'react-redux'; 
import BundlesView from '../bundlesView'
import { getBundlesService } from '../../services/bundleService';
import styles from './styles.css';




const BundlesList = () => {
    const [bundles,setBundles] = useState({});
    useEffect(() => {
        (async () => {
            setBundles( await getBundlesService());
        })();
    },[]);


    return (
        <div >
            <h1>Bundles</h1>
            <div className="bundles-list" style={styles}>
                
                {Object.values(bundles).map(item => ( 
                        <BundlesView key={item.id} item={item} />
                        ))}
            </div>
        </div>
    )
}

export default BundlesList;