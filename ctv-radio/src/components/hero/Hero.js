import React from 'react';
import '../App.css';
import './HeroStyles.css';




function Hero() {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    <h1>Welcome To CTV <span>Radio!</span></h1>
                    <p>TUNE IN</p>
                    <div><button>Watch Show</button></div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;