import React, { useEffect,useState } from 'react';
import { useSelector} from 'react-redux'; 
import BubbleView from '../bubblesView'
import { getBubblesService } from '../../services/bubbleService';
import styles from './styles.css';
import { Link } from 'react-router-dom';




const Home = () => {
    const [bubbles,setBubbles] = useState({});
    useEffect(() => {
        (async () => {
            setBubbles( await getBubblesService());
        })();
    },[]);

    console.log(bubbles);

    return (
        <div >
            <h1>Welcome to Bubblify</h1>
            <Link to={"/bubbles"}>
                <h2 className='bubbles' style={styles}>Bubbles</h2>
            </Link>

        </div>
    )
}

export default Home;