import React,{useState} from "react";
import styles from './styles.css';
import { Link } from 'react-router-dom';

const DeliveryForm = () => {
    const [customer,setCustomer] = useState({
        name: "",
        address: "",
        phone: "",
        city: "",
        code: "",
    });
    // state = {
    //     customer:{
    //         name: "",
    //         address: "",
    //         phone: "",
    //         city: "",
    //         zip: ""
    //     }
    // }


    // const handleChange = (event) => {
    //     setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
    //   };
    const handleChange = (event) => {
        setCustomer({...customer,[event.target.name]:event.target.value,} )
    };
    // const [inputs,setInputs] = useState({})

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const address = event.target.address;
    //     const city = event.target.city;
    //     const phone = event.target.phone;
    //     const code = event.target.code;
    //    setInputs(values => ({...values,[phone]:{name,address,city,code}}))
    // }
    // const handleSubmit = (event) => {
    // const { name, address, phone, city, code } = this.state.fields;
    //     this.saveCustomer(name,address,phone,city,code)
    // };

    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log(`customer: ${customer}`);
      };

//    const saveCustomer = (name,  address="", phone, city="", code="") =>{
//         let customer = {}
//         customer['name'] = name
//         customer['phone'] = phone
//         customer['address'] = address
//         customer['city'] = city
//         customer['code'] = code
//         this.setState({
//             customer: customer
//         });
//         localStorage.setItem('customer', JSON.stringify(customer));
//     };

    return(
        <div className="delivery-container" style={styles}>
            <div>Enter Information</div>
            <form  onSubmit={handleSubmit} className="deliveryForm" style={styles}>
                <label> Enter name:
                    <input
                    name='name'
                    value={customer.name}
                    onChange={handleChange} />
                </label>
                <label> Address:
                    <input
                    address='address'
                    value={customer.address} 
                    onChange={handleChange}/>
                </label>
                <label> City:
                    <input
                    city='city'
                    value={customer.city} 
                    onChange={handleChange}/>
                </label>
                <label> Telephone:
                    <input
                    phone='phone'
                    value={customer.phone}
                    onChange={handleChange} />
                </label>
                <label> Postal code:
                    <input
                    type='text'
                    code='code'
                    value={customer.code}
                    onChange={handleChange}/>
                </label>
                <input className="submit" type='submit' style={styles}/>

            </form>
        </div>
    )
};


export default DeliveryForm;