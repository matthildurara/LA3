import React,{useState} from "react";
import styles from './styles.css';
import { Link } from 'react-router-dom';


const PickupForm = () => {
    // const [inputs,setInputs] = useState({})
    const [customerPickup,setCustomerPickup] = useState({
        name: "",
        phone: "",
    });
    const [error, setError]  = useState('');

    const handleChange = (event) => {
        setCustomerPickup({...customerPickup,
            [event.target.name]:event.target.value});

    };
    const validate = (event) => {
        if(event.target.name === "") {
            setError('Name is required');
            console.log('name is required');
            return false;
        }
        if(customerPickup.phone.length !== 7) {
            setError('Phone  is required');
            console.log('name is required');
            return false;
        }
        if(error.length !== ""){return false;}
        return true;
    };
    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        if(validate(event) === true){

        console.log(`customer: ${customerPickup.name}`);
        localStorage.setItem('customerPickup', JSON.stringify(customerPickup))
        let cust = localStorage.getItem('customerPickup');
        console.log(cust);
        }


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
                    type='number'
                    name='phone'
                    value={customerPickup.phone}
                    onChange={handleChange} />
                </label>
                <Link to="/review" state={{customer: customerPickup}}   style={{ textDecoration: 'none'}}>

                <input className="submit-button" style={styles} type='submit' />
                </Link>
            </form>
                {error === ''?
                <div> {error}</div>
                :
                <></>
                }
        </div>
    )
};

export default PickupForm;