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
        <div className='container' style={styles}>
            <h1>Welcome to Bubblify</h1>
            <Link to={"/bubbles"} style={{ textDecoration: 'none'}}>
                <div className='btn bubbles' style={styles}>Bubbles</div>
            </Link>

        </div>
    )
}

export default Home;