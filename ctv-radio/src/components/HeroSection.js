import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';






function HeroSection() {
    return (
        <div className='hero-container'> {/* background video section "46:33" */}
            <h1>Welcome To CTV <span>RADIO!</span></h1>
            <p>TUNE IN!!</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch Shows! <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;