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
    const handleChange = (event) => {
        setCustomer({...customer,
            [event.target.name]:event.target.value});
            // console.log(`customer handle change name ${event.target.name}`);

            // console.log(`customer handle change ${event.target.value}`);
    };
    const validate = (event) => {
        console.log('hallo í validate');
        if(event.target.name === "") {
            setError('Name is required');
            console.log('name is required');
            return false;
        }
        // if(customerPickup.phone.length !== 7) {
        //     setError('Phone  is required');
        //     console.log('name is required');
        //     return false;
        // }
        if(error.length !== ""){return false;}
        console.log('is true');
        return true;
    };
    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        console.log("validation");
        event.preventDefault();
        if(validate(event)){
        localStorage.setItem('customer', JSON.stringify(customer))
        let cust = localStorage.getItem('customer');
        // console.log(cust);
        }
      };
      
    return(
        <div className="delivery-container" style={styles}>
            <div className="name">Enter Information</div>
            <form   className="deliveryForm" style={styles}>
                <label className="name"> Enter name:
                    <input
                    type="name"
                    name='name'
                    value={customer.name}
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
                <label className="name"> Telephone:
                    <input
                     type="number"
                    name='phone'
                    value={customer.phone}
                    onChange={handleChange} />
                </label>
                <label className="name"> Postal code:
                    <input
                    type="postal"
                    name='code'
                    value={customer.code}
                    onChange={handleChange}/>
                </label>
                <Link to="/review" state={{customer: customer}}  style={{ textDecoration: 'none'}}>

                <input  onClick={handleSubmit}className="submit" type='submit' style={styles}/>
                </Link>
            </form>
        </div>
    )
};


export default DeliveryForm;