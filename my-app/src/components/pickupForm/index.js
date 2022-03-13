import React,{useState} from "react";
import styles from './styles.css';
import { Link } from 'react-router-dom';


const PickupForm = () => {
    // const [inputs,setInputs] = useState({})
    const [customerPickup,setCustomerPickup] = useState({
        name: "",
        phone: "",
    });

    const handleChange = (event) => {
        setCustomerPickup({...customerPickup,
            [event.target.name]:event.target.value});

    };
    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log(`customer: ${customerPickup.name}`);
        localStorage.setItem('customerPickup', JSON.stringify(customerPickup))
        let cust = localStorage.getItem('customerPickup');
        console.log(cust);

      };
    return(
        <div className="pickup-container" style={styles}>
            <div className="enterInfo">Enter Information</div>
            <form className="pickupForm" style={styles} onSubmit={handleSubmit}>
                <label className="name"> Enter name:
                    <input
                    type='name'
                    name='name'
                    value={customerPickup.name}
                    onChange={handleChange} />
                </label>
                <label className="name"> Telephone:
                    <input
                    type='tel'
                    name='phone'
                    value={customerPickup.phone}
                    onChange={handleChange} />
                </label>
                <Link to="/review" state={{customer: customerPickup}}   style={{ textDecoration: 'none'}}>

                <input className="submit-button" style={styles} type='submit' />
                </Link>
            </form>
        </div>
    )
};

export default PickupForm;