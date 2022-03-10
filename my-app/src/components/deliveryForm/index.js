import React,{useState} from "react";
import styles from './styles.css';

const DeliveryForm = () => {
    const [inputs,setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const address = event.target.address;
        const city = event.target.city;
        const phone = event.target.phone;
        const code = event.target.code;
       setInputs(values => ({...values,[phone]:{name,address,city,code}}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        alert(inputs);
    }
    return(
        <div className="delivery-container" style={styles}>
            <div>Enter Information</div>
            <form className="deliveryForm"onSubmit={handleSubmit} style={styles}>
                <label> Enter name:
                    <input
                    type='text'
                    name='name'
                    value={inputs.name}
                    onChange={handleChange} />
                </label>
                <label> Address:
                    <input
                    type='text'
                    address='address'
                    value={inputs.address} 
                    onChange={handleChange}/>
                </label>
                <label> City:
                    <input
                    type='text'
                    city='city'
                    value={inputs.city} 
                    onChange={handleChange}/>
                </label>
                <label> Telephone:
                    <input
                    type='text'
                    phone='phone'
                    value={inputs.phone}
                    onChange={handleChange} />
                </label>
                <label> Postal code:
                    <input
                    type='text'
                    code='code'
                    value={inputs.code}
                    onChange={handleChange}/>
                </label>
                <input className="submit" type='submit' style={styles}/>
            </form>
        </div>
    )
};

export default DeliveryForm;