import React,{ useState }  from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import PropTypes from 'prop-types';
import { addToCart } from '../../services/cartService';
import DeliveryForm from '../deliveryForm';
import PickupForm from '../pickupForm';
// import { useLocation } from "react-router"
// import {CheckBox} from 'react-native-elements';

const Checkout = ({item}) => {
    // const form = this.props.location.state;
    // const { form} = useLocation(); 
    // console.log(form);
    const [delivery,setDelivery] = useState(false);
    const [pickup,setPickup]= useState(true);
    const [addNewDelivery,setAddDelivery]= useState([]);
    // const [isPickup,setIsPickup] = useState(false);
    // const [pickup,setPickup] = useState(false);
    // const Checkbox = props => (
    //     <input type='checkbox' {...props}/>
    // );
    const handleChangeDelivery = () => {
        setDelivery(!delivery);
        setPickup(false);
    };
    const handleChangePickup = () => {
        setPickup(!pickup);
        setDelivery(false);
    };
    const addDelivery = (info) => {
        setAddDelivery([...addNewDelivery,info]);
    };
    


    return (
        <>
        <div className='container-bubble'>
            <div className='checkout-site' style={styles} >
                Checkout
            </div>
            <div className='delivery-pickup' style={styles}>
            <div className='pickup' style={styles}>
            <div>Pickup</div>
            <div>
                <input
                type='checkbox'
                checked={pickup}
                onChange={handleChangePickup}/>
            </div>
            </div>
            <div className='delivery' style={styles}>
            <div>delivery</div>
            <div>
                <input
                type='checkbox'
                checked={delivery}
                onChange={handleChangeDelivery}/>
            </div>
            </div>
            </div>
            </div> 

            <div>
                {pickup?
                <PickupForm/>
                :
                <DeliveryForm addDelivery={addDelivery}/>
                }
            </div>
            </>



    )
};

export default Checkout;