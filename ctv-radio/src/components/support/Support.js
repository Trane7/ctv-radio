import React from 'react';
import '../support/Support.css';

function Support() {
  return (
    <div className='support'>
      <div className='container'>
        <div className='content'>
          <h2>Support <span>Us</span></h2>
          <p>Come support our <span className='one'>Team!</span></p>
          <div>
            <button>Sign Up</button>
            <button>Facebook</button>
            <button>Youtube</button>
            <button>TikTok</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support;