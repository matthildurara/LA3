import React from 'react';
import styles from './styles.css';

const About = () => {
    return(
        <div className='container'>
            <h1 className='aboutHeading'>About Bubblify </h1>
            <p> Bubblify is a comapany in the bubble industry</p>
            <p><strong>Address:</strong> Bubble Street 88, Iceland </p>
            <div className='contactBubbly'>
                <h1 className='contactUs'>Contact us</h1>
                <p><strong>Phone:</strong> 8888888</p>
                <p><strong>Email:</strong> bubbles@bubblify.com</p>
            </div>
        </div>
    )
}
export default About;