import React from 'react';
import { Link } from 'react-router-dom';
import "../footer/Footer.css";


const Footer = () => {

    // const handleClick = () =>{
    //     console.log('button clicked');
    // }


    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to="/component/">HOME</Link>
                        <Link to="/component/catalog">CATALOG</Link>
                        <Link to="/support">SUPPORT</Link>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <Link to="/">Contact</Link>
                            <Link to="/">Return & Exchange Policy</Link>
                            <Link to="/">Privacy Policy</Link>
                            <Link to="/">Refund Policy</Link>
                        </div>
                    </div>
                </div>


                <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                        Join the Family
                    </p>
                    <div className='input-areas'> {/* Button Path needs to be fixed!!!!! */}
                        <button  className="footer-button" onClick={'/'}>Subscribe</button>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Footer;