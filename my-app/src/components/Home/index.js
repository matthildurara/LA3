import React, { useEffect,useState } from 'react';
import { useSelector} from 'react-redux'; 
import BubbleView from '../bubblesView'
import { getBubblesService } from '../../services/bubbleService';




const Home = () => {
    const [bubbles,setBubbles] = useState({});
    useEffect(() => {
        (async () => {
            setBubbles( await getBubblesService());
        })();
    },[]);

    console.log(bubbles);

    return (
        <div className="Home">
            <h1>Bubblify</h1>
            <div>
                {Object.values(bubbles).map(item => ( 
                    <div key={item.id}>
                        {item.name}
                        </div>))}
            </div>
        </div>
    )
}

export default Home;