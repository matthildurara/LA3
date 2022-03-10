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
        // let customer = {}
        // customer['name'] = customer.name
        // customer['phone'] = customer.phone
        // customer['address'] = customer.address
        // customer['city'] = city
        // customer['zip'] = zip
        // this.setState({
        //     customer: customer
        // })
        localStorage.setItem('customer', JSON.stringify(customer))
        let cust = localStorage.getItem('customer');
        // let items = JSON.parse(localStorage.getItem('item'));
        console.log(cust);

      };
      

    return(
        <div className="delivery-container" style={styles}>
            <div>Enter Information</div>
            <form  onSubmit={handleSubmit} className="deliveryForm" style={styles}>
                <label> Enter name:
                    <input
                    type="name"
                    name='name'
                    value={customer.username}
                    onChange={handleChange} />
                </label>
                <label> Address:
                    <input
                     type="address"
                    name='address'
                    value={customer.address} 
                    onChange={handleChange}/>
                </label>
                <label> City:
                    <input
                     type="city"
                    name='city'
                    value={customer.city} 
                    onChange={handleChange}/>
                </label>
                <label> Telephone:
                    <input
                     type="number"
                    name='phone'
                    value={customer.phone}
                    onChange={handleChange} />
                </label>
                <label> Postal code:
                    <input
                    type="postal"
                    name='code'
                    value={customer.code}
                    onChange={handleChange}/>
                </label>
                <Link to={"/review" }  style={{ textDecoration: 'none'}}>

                <input className="submit" type='submit' style={styles}/>
                </Link>
            </form>
        </div>
    )
};


export default DeliveryForm;