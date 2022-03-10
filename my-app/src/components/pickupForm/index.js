import React,{useState} from "react";
import styles from './styles.css';

const DeliveryForm = () => {
    const [inputs,setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const phone = event.target.phone;

       setInputs(values => ({...values,[phone]:name}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        alert(inputs);
    }
    return(
        <div className="pickup-container" style={styles}>
            <div>Enter Information</div>
            <form className="pickupForm" style={styles} onSubmit={handleSubmit}>
                <label> Enter name:
                    <input
                    type='text'
                    name='name'
                    value={inputs.name}
                    onChange={handleChange} />
                </label>
                <label> Telephone:
                    <input
                    type='text'
                    phone='phone'
                    value={inputs.phone}
                    onChange={handleChange} />
                </label>
                <input className="submit-button" style={styles} type='submit' />
            </form>
        </div>
    )
};

export default DeliveryForm;