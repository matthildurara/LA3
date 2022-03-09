import React, { useEffect,useState } from 'react';
import { useSelector} from 'react-redux'; 
import BubbleView from '../bubblesView'
import { getBubblesService } from '../../services/bubbleService';
import styles from './styles.css';




const BubblesList = () => {
    const [bubbles,setBubbles] = useState({});
    useEffect(() => {
        (async () => {
            setBubbles( await getBubblesService());
        })();
    },[]);
    console.log('Item in bubbles',bubbles);

    return (
        <div className='container' style={styles}>
            <h1 className='bubble-title' style={styles}>Bubbles</h1>
            <div className="home-bubbles" style={styles}>
                {Object.values(bubbles).map(item => ( 
                     
                        <BubbleView key={item.id} item={item} />
                        ))}
            </div>
        </div>
    )
}

export default BubblesList;