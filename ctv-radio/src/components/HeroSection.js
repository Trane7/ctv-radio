import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { Button } from './Button';
import './Home.css';






function HeroSection() {
    return (
        <div className='hero-container'> {/* background video section "46:33" */}
            <h1>Welcome To CTV <span>Radio!</span></h1>
            <p>TUNE IN</p>
            <Link to="/shows">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch Show <i className='far fa-play-circle' />
                </Button>
            </Link>
        </div>
    )
}

export default HeroSection;