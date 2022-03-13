import React,{useState} from "react";
import styles from './styles.css';
import { Link } from 'react-router-dom';


const PickupForm = () => {
    const [customerPickup,setCustomerPickup] = useState({
        name: "",
        phone: "",
    });
    const [error, setError]  = useState('');
    const [confirm,setConfirm] = useState(false);
    const handleChange = (event) => {
        setCustomerPickup({...customerPickup,
            [event.target.name]:event.target.value});
    };
    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        if(validate()){
            localStorage.setItem('customerPickup', JSON.stringify(customerPickup))
            let cust = localStorage.getItem('customerPickup');
            setConfirm(true);
        }
      };
    const validate = () => {
        console.log('hallo í validate');
        if(customerPickup.name === "") {
            setError('Name is required');
            return false;
        }
        if(customerPickup.phone.length !== 7) {
            setError('Phone  is required and needs to be 7 numbes');
            return false;
        }
        setError('');
        return true;
        
    };
    return(
        <div className="pickup-container" style={styles}>
            <div className="enterInfo">Enter Information</div>
            <form  onSubmit={event => handleSubmit(event)} className="pickupForm" style={styles}>
                <label className="name"> Enter name:
                    <input
                    type='name'
                    name='name'
                    value={customerPickup.name}
                    onChange={handleChange} />
                </label>
                <label className="name"> Telephone:
                    <input
                    type='number'
                    name='phone'
                    value={customerPickup.phone}
                    onChange={handleChange} />
                </label>
                <input className="confirm-button" style={styles} type='submit' />
            </form>
                {error?
                    <div> {error}</div>
                    :
                    <></>
                }
                {confirm?
                    <Link to="/review" state={{customer: customerPickup}}   style={{ textDecoration: 'none'}}> 
                        <div className="submit-button-pick" style={styles}> See review</div>
                    </Link>
                    :
                    <></>
                }
        </div>
    )
};

export default PickupForm;