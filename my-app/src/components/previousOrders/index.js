import React, { useEffect,useState } from 'react';
import { useSelector} from 'react-redux'; 
import { useParams } from "react-router-dom";
import { getOrders } from '../../services/orderService';
import PrevOrderList from '../prevOrderList';
import styles from './styles.css';






const PreviousOrders =  () => {
    const { telephone } = useParams();
    const [prevOrders, setPrevOrders] = useState({});
    // const [bubbles,setBubbles] = useState({});
    useEffect(() => {
        (async () => {
            setPrevOrders( await getOrders(telephone));
        })();
    },[telephone]);
    // const orders =  getOrders(telephone);
    // setPrevOrders(order);
    console.log(prevOrders);
    console.log(telephone);
    return (
        <div >
             <h1>Previous Orders</h1>
            {/* {orders.items.map((item, index) =>
                            <li className="list-group-item cart-item" key={index}>
                                <img className="cart-item-image" src={item.image} alt={item.name} />
                                <span className="cart-item-name">{item.name}</span>
                                <span className="float-right pt-2">{item.price} kr.</span>
                            </li>
                            )} */}
            <div className='prev-cont' style={styles}>
             {Object.values(prevOrders).map((item,index) => ( 
                 <PrevOrderList key={index} item={item}/>
    ))}
    </div>


        </div>
    )
}

export default PreviousOrders;