import React from 'react';
import logo from '../../assets/ctvlogosm.jpg';
import '../support/Support.css';

const Support= () => {
  return (
    <div className='support'>
      <div className='container'>
        <div className='content'>
          <h2>Support <span>Us</span></h2>
          <img src={logo} alt="Logo" />
          <p>Come support our <span className='one'>Team</span>!</p>
          <div>
            <button>Sign Up</button>
            <button>Facebook</button>
            <button>Youtube</button>
            <button>TikTok</button>
            <button>Submit Song</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support;