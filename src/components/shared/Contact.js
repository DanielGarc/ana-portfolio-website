import React from 'react';
import '../css/contact.css';

const Contact = () => {
    return (
        <div className="contactWrapper">
            <div className="contactText">
                <h2 style={{fontWeight: "300"}}> Don't Be A Stranger</h2>
                <h1 style={{fontWeight: "500"}}> Let's Connect! </h1>
            </div>

            <form>
                <p> Name : </p>
                <input type="text" placeholder="Enter Your Name"/>

                <p> Email : </p>
                <input type="email" placeholder="Enter Your Email" />

                <p> Message : </p>
                <input type="message" placeholder="Enter Your Message" />
            
                <input className="submitButton" tye="Submit" value="Submit Message" />
            </form>
            
        </div>
    )
}

export default Contact
