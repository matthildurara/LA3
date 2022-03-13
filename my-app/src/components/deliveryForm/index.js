import React,{useState} from "react";
import styles from './styles.css';
import { Link } from 'react-router-dom';

const DeliveryForm = () => {
    const [customer,setCustomer] = useState({
        name: "",
        address: "",
        phone: "",
        city: "",
        code: ""
    });
    const [error, setError]  = useState('');
    const [confirm,setConfirm] = useState(false);

    const handleChange = (event) => {
        setCustomer({...customer,
            [event.target.name]:event.target.value});
    };
    const validate = () => {
        console.log('hallo í validate');
        if(customer.name === "") {
            setError('Name is required');
            return false;
        }
        if(customer.phone.length !== 7) {
            setError('Phone  is required and needs to be 7 numbers');
            return false;
        }
        if(customer.address === "") {
            setError('Address is required');
            return false;
        }
        if(customer.city === "") {
            setError('City is required ');
            return false;
        }
        if(customer.code === "") {
            setError('Address is required ');
            return false;
        }
            setError('');
            return true;
    };
    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        if(validate()){
            localStorage.setItem('customer', JSON.stringify(customer))
            let cust = localStorage.getItem('customer');
            setConfirm(true);
        }
      };
      
    return(
        <div className="delivery-container" style={styles}>
            <div className="name">Enter Information</div>
            <form  onSubmit={handleSubmit} className="deliveryForm" style={styles}>
                <label className="name"> Enter name:
                    <input
                    type="name"
                    name='name'
                    value={customer.name}
                    onChange={handleChange} />
                </label>
                <label className="name"> Telephone:
                    <input
                     type="number"
                    name='phone'
                    value={customer.phone}
                    onChange={handleChange} />
                </label>
                <label className="name"> Address:
                    <input
                     type="address"
                    name='address'
                    value={customer.address} 
                    onChange={handleChange}/>
                </label>
                <label className="name"> City:
                    <input
                     type="city"
                    name='city'
                    value={customer.city} 
                    onChange={handleChange}/>
                </label>
                <label className="name"> Postal code:
                    <input
                    type="number"
                    name='code'
                    value={customer.code}
                    onChange={handleChange}/>
                </label>
                <input  className="confirm-button" type='submit' style={styles}/>
            </form>
            {error?
                <div> {error}</div>
                :
                <></>
                }
            {confirm?
                <Link to="/review" state={{customer: customer}}  style={{ textDecoration: 'none'}}>
                    <div  className="submit-button-del" style={styles}>See Review</div>
                </Link>
                :
                <></>
            }
        </div>
    )
};


export default DeliveryForm;