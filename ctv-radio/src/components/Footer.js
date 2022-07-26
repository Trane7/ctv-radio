import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import "./Footer.css";




function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to="/HeroSection">HOME</Link>
                        <Link to="/">CATALOG</Link>
                        <Link to="/">SUPPORT</Link>
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
                        Join the family
                    </p>
                    <div className='input-areas'>
                        <Button buttonStyle='btn--primary' className="footer-button">Subscribe</Button>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Footer