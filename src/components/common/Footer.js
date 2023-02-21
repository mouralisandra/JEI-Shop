import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const [subValue, setSubValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubValue('');
        alert('Thankyou, you are subscribed to receive our daily newsletter');
    };

    const currYear = new Date().getFullYear();


    return (
        <footer id="footer">
            <div className="container">
                <div className="wrapper footer_wrapper">
                    <div className="foot_about">
                        <h2>
                            <Link to="/">JEI SHOP</Link>
                        </h2>
                        <div className="foot_subs">
                            <p>Junior Entreprise INSAT Mini Project</p>
                           
                        </div>
                    </div>

                </div>
            </div>
        </footer >
    );
};

export default Footer;