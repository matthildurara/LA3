import React, { useEffect,useState } from 'react';
import { useSelector} from 'react-redux'; 
import { useParams } from "react-router-dom";
import { getOrders } from '../../services/orderService';
import PrevOrderList from '../prevOrderList';
import styles from './styles.css';

const PreviousOrders =  () => {
    const { telephone } = useParams();
    const [prevOrders, setPrevOrders] = useState({});
    useEffect(() => {
        (async () => {
            setPrevOrders( await getOrders(telephone));
        })();
    },[telephone]);
    console.log(prevOrders);
    console.log(telephone);
    return (
        <div >
             <h1>Previous Orders</h1>
            <div className='prev-cont' style={styles}>
             {Object.values(prevOrders).map((item,index) => ( 
                 <PrevOrderList key={index} item={item}/>
            ))}
            </div>
        </div>
    )
}

export default PreviousOrders;