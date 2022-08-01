import React from 'react';
import './Catalog.css';


function Catalog() {            /* This is the catalog itself */
  return (
    <div className='catalog'>
        <div className='container'>
            <div className='content'>
            <h1>CATALOG</h1>
            <h2> COMING SOON!</h2>
                <ul className='items'>
                  {/* <placeholder>This is where the merch will go</placeholder> */}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Catalog; 
