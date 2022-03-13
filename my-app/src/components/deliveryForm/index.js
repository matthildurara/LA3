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

    const handleChange = (event) => {
        setCustomer({...customer,
            [event.target.name]:event.target.value});
            // console.log(`customer handle change name ${event.target.name}`);

            // console.log(`customer handle change ${event.target.value}`);
    };

    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log(`customer: ${customer.name}`);
        localStorage.setItem('customer', JSON.stringify(customer))
        let cust = localStorage.getItem('customer');
        console.log(cust);

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

                <input className="submit" type='submit' style={styles}/>
                </Link>
            </form>
        </div>
    )
};


export default DeliveryForm;